import {AfterViewInit, ComponentRef, Directive, ElementRef, HostListener, Inject, InputSignalWithTransform, OnDestroy, ViewContainerRef, booleanAttribute, input} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MatDialog, } from '@angular/material/dialog';
import {POSITION, Position, PositionPlacement, applyPositionResult, getHostElement} from '@anglr/common';
import {BindThis, nameof} from '@jscrpt/common';
import {Subscription} from 'rxjs';

import {SourceViewerComponent} from '../../components/sourceViewer/sourceViewer.component';

/**
 * Directive used for displaying source HTML
 */
@Directive(
{
    selector: '[showSource]',
    standalone: true,
})
export class ShowSourceDirective implements AfterViewInit, OnDestroy
{
    //######################### private fields #########################

    /**
     * Source html at time of entering element
     */
    private _sourceHtml: string|undefined|null;

    /**
     * Subscription for update of position
     */
    private _positionSubscription: Subscription|undefined|null;

    /**
     * Element created as popup displaying link for source displaying
     */
    private _popupElement: HTMLDivElement|undefined|null;

    /**
     * Component ref for inline source viewer
     */
    private _componentRef: ComponentRef<SourceViewerComponent>|undefined|null;

    //######################### public properties - inputs #########################

    /**
     * Indication whether display source inline, or in dialog 
     */
    public inline: InputSignalWithTransform<boolean, boolean|''> = input<boolean, boolean|''>(true, {transform: booleanAttribute});

    //######################### constructor #########################
    constructor(private _element: ElementRef<HTMLElement>,
                private _dialogSvc: MatDialog,
                private _viewContainer: ViewContainerRef,
                @Inject(DOCUMENT) private _document: Document,
                @Inject(POSITION) private _position: Position<HTMLElement>,)
    {
    }

    //######################### public methods - implementation of AfterViewInit #########################
    
    /**
     * @inheritdoc
     */
    public ngAfterViewInit(): void
    {
        if(!this.inline())
        {
            return;
        }

        this._sourceHtml = this._element.nativeElement.innerHTML;

        this._componentRef = this._viewContainer.createComponent(SourceViewerComponent);
        this._componentRef.setInput(nameof<SourceViewerComponent>('sourceHtml'), this._sourceHtml);

        const element = getHostElement(this._componentRef);

        if(element)
        {
            element.style.border = '1px solid #1e1e1e';
        }
    }

    //######################### public methods - implementation of OnDestroy #########################
    
    /**
     * @inheritdoc
     */
    public ngOnDestroy(): void
    {
        this._removeCreatedSources();
    }

    //######################### protected methods - host #########################

    /**
     * Shows source link
     */
    @HostListener('mouseenter')
    protected showSourceLink(): void
    {
        if(this.inline())
        {
            return;
        }

        this._sourceHtml = this._element.nativeElement.innerHTML;

        const div = this._popupElement = this._document.createElement('div');
        const button = this._document.createElement('button');
        const span = this._document.createElement('span');

        span.classList.add('fas', 'fa-code');
        button.classList.add('btn-icon');
        div.classList.add('absolute', 'padding-extra-small', 'border-round');
        div.style.backgroundColor = '#f0f0f0';

        button.addEventListener('click', this._showSourceViewer);

        button.appendChild(span);
        div.appendChild(button);
        this._element.nativeElement.appendChild(div);

        this._positionSubscription = this._position.placeElement(div, this._element.nativeElement,
        {
            autoUpdate: true,
            placement: PositionPlacement.TopEnd,
        }).subscribe(placement => applyPositionResult(placement));
    }

    /**
     * Hides source link
     */
    @HostListener('mouseleave')
    protected hideSourceLink(): void
    {
        if(this.inline())
        {
            return;
        }

        this._removeCreatedSources();

        this._sourceHtml = null;
    }

    //######################### private methods #########################
    
    /**
     * Removes created sources
     */
    private _removeCreatedSources(): void
    {
        this._componentRef?.destroy();

        this._popupElement?.remove();
        this._popupElement = null;

        this._positionSubscription?.unsubscribe();
        this._positionSubscription = null;
    }

    /**
     * Displays dialog source viewer
     */
    @BindThis
    private _showSourceViewer(): void
    {
        this._dialogSvc.open<SourceViewerComponent, string>(SourceViewerComponent,
        {
            width: '75vw',
            maxHeight: '75vh',
            data: this._sourceHtml,
        });
    }
}