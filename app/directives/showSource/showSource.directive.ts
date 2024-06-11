import {Directive, ElementRef, HostListener, Inject, OnDestroy} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MatDialog, } from '@angular/material/dialog';
import {POSITION, Position, PositionPlacement, applyPositionResult} from '@anglr/common';
import {BindThis} from '@jscrpt/common';
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
export class ShowSourceDirective implements OnDestroy
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

    //######################### constructor #########################
    constructor(private _element: ElementRef<HTMLElement>,
                private _dialogSvc: MatDialog,
                @Inject(DOCUMENT) private _document: Document,
                @Inject(POSITION) private _position: Position<HTMLElement>,)
    {
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
        this._removeCreatedSources();

        this._sourceHtml = null;
    }

    //######################### private methods #########################
    
    /**
     * Removes created sources
     */
    private _removeCreatedSources(): void
    {
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