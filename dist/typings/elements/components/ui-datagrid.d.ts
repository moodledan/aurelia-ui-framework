import { View } from 'aurelia-framework';
export declare class UIDgRow {
    bind(bindingContext: Object, overrideContext: Object): void;
    cols: any;
    record: any;
}
export declare class UIDatagrid {
    element: Element;
    constructor(element: Element);
    created(owningView: View, myView: View): void;
    bind(bindingContext: Object, overrideContext: Object): void;
    attached(): void;
    detached(): void;
    unbind(): void;
    columns: any;
    data: any[];
    loaded: boolean;
    summaryRow: boolean;
    sortColumn: string;
    sortOrder: string;
    pager: any;
    perPage: number;
    private cols;
    private paged;
    private filtered;
    private tableWidth;
    private virtual;
    private isBusy;
    private obPageChange;
    columnsChanged(newValue: any): void;
    dataChanged(newValue: any): void;
    dgHead: any;
    dgFoot: any;
    scroller: any;
    private scrolling();
    private filter();
    private makePage();
    private doSort(col);
    private calculateWidth(cols);
    private fireSelect(record);
    move: any;
    stop: any;
    diff: any;
    startX: any;
    ghost: any;
    colNext: any;
    colResize: any;
    resizing: boolean;
    resizeColumn(evt: any, col: any, next: any): boolean;
    resize(evt: any): void;
    resizeEnd(evt: any): void;
}
export declare class UIDGEmpty {
}
export declare class UIPager {
    element: Element;
    constructor(element: Element);
    created(owningView: View, myView: View): void;
    bind(bindingContext: Object, overrideContext: Object): void;
    attached(): void;
    detached(): void;
    unbind(): void;
    page: number;
    style: string;
    totalPages: number;
    fireChange(): void;
}
export declare class UIDGFilter {
    element: Element;
    constructor(element: Element);
    created(owningView: View, myView: View): void;
    bind(bindingContext: Object, overrideContext: Object): void;
    attached(): void;
    detached(): void;
    unbind(): void;
}
