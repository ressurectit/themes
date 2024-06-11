import {Directive, Optional, ElementRef, PLATFORM_ID, Inject, HostListener, inject, InputSignal, input, effect} from '@angular/core';
import {isPlatformBrowser, DOCUMENT} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {Notifications} from '@anglr/common';
import {DEFAULT_RENDER_MARKDOWN_CONFIG, HelpService, MD_HELP_NOTIFICATIONS, RENDER_MARKDOWN_CONFIG, RenderMarkdownConfig, handleHelpServiceError, handleRouterLink, renderMarkdown, updateRenderMarkdownConfig} from '@anglr/md-help/web';
import {extend} from '@jscrpt/common';

/**
 * Directive that renders markdown inside
 */
@Directive(
{
    selector: '[renderMarkdown]',
    standalone: true,
})
export class RenderMarkdownDirective
{
    //######################### protected fields #########################

    /**
     * Indication whether is code running in browser
     */
    protected isBrowser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

    /**
     * Current value of config
     */
    protected config: RenderMarkdownConfig;

    //######################### public properties - inputs #########################

    /**
     * Markdown string to be rendered
     */
    public renderMarkdown: InputSignal<string|undefined|null> = input();

    /**
     * Source string, used for obtaining markdown, using help service
     */
    public source: InputSignal<string|undefined|null> = input();

    /**
     * Base url for md
     */
    public baseUrl: InputSignal<string> = input('');

    /**
     * Path for static assets
     */
    public assetsPathPrefix: InputSignal<string|undefined|null> = input();

    //######################### public methods - host #########################

    /**
     * Process click for anchors
     * @param target - Target that was clicked
     */
    @HostListener('click', ['$event'])
    public processClick(target: MouseEvent): boolean
    {
        return handleRouterLink(target, this.router, this.document);
    }

    //######################### constructor #########################
    constructor(@Optional() protected helpSvc: HelpService,
                protected element: ElementRef<HTMLElement>,
                protected router: Router,
                protected route: ActivatedRoute,
                @Inject(DOCUMENT) protected document: Document,
                @Optional() @Inject(MD_HELP_NOTIFICATIONS) protected notifications: Notifications,
                @Optional() @Inject(RENDER_MARKDOWN_CONFIG) protected renderMarkdownConfig?: RenderMarkdownConfig,)
    {
        this.renderMarkdownConfig = extend(true, {}, DEFAULT_RENDER_MARKDOWN_CONFIG, this.renderMarkdownConfig ?? {});

        this.config = extend(true, {}, this.renderMarkdownConfig ?? {});

        effect(() =>
        {
            const baseUrl = this.baseUrl();
            const assetsPathPrefix = this.assetsPathPrefix();

            if(baseUrl && assetsPathPrefix)
            {
                this.config = extend(true, {}, this.renderMarkdownConfig ?? {});

                updateRenderMarkdownConfig(this.config, baseUrl, assetsPathPrefix);
            }
        });

        effect(() =>
        {
            const renderMarkdown = this.renderMarkdown();
            const source = this.source();

            if(renderMarkdown)
            {
                this.renderMd(renderMarkdown);
            }
            else if(source)
            {
                this.loadMarkdown();
            }
            else
            {
                this.renderMd(this.element.nativeElement.textContent ?? '');
            }
        });
    }

    //######################### public methods #########################

    /**
     * Redirects to not found page
     */
    public showNotFound(): void
    {
    }

    /**
     * Filters out parts of markdown that should not be processed
     * @param md - Markdown to be filtered
     */
    public filterMd(md: string): Promise<string>
    {
        return Promise.resolve(md);
    }

    /**
     * Filters out parts of html that should not be rendered
     * @param html - Html to be filtered
     */
    public filterHtml(html: string): Promise<string>
    {
        return Promise.resolve(html);
    }

    //######################### protected methods #########################

    /**
     * Loads markdown using source
     */
    protected loadMarkdown(): void
    {
        const source = this.source();

        if(!source || !this.helpSvc)
        {
            return;
        }

        this.helpSvc.get(source)
            .pipe(handleHelpServiceError(this.showNotFound.bind(this), this.notifications))
            .subscribe(content => this.renderMd(content));
    }

    /**
     * Renders markdown
     * @param markdown - Markdown to be rendered
     */
    protected async renderMd(markdown: string): Promise<void>
    {
        this.element.nativeElement.innerHTML = await this.filterHtml(renderMarkdown(await this.filterMd(markdown), this.config, this.router, this.route, this.document));

        this.scrollIntoView();
    }

    /**
     * Scrolls into view fragment element
     */
    protected scrollIntoView(): void
    {
        if(this.isBrowser && this.route.snapshot.fragment)
        {
            const element = this.document.getElementById(this.route.snapshot.fragment);

            if(element)
            {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    }
}