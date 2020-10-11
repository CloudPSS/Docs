import { Component, Input, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarkdownComponent } from '../markdown';

/**
 * 显示 TOC
 */
@Component({
    selector: 'app-toc',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class TocComponent {
    /** MD 文件 */
    _document?: MarkdownComponent;

    /** nav */
    @ViewChild('nav') nav?: ElementRef<HTMLElement>;
    /** li items */
    @ViewChildren('itemElement') items?: QueryList<ElementRef<HTMLLIElement>>;

    /** MD 文件 */
    @Input() get document(): MarkdownComponent | undefined {
        return this._document;
    }
    set document(value: MarkdownComponent | undefined) {
        this._document = value;
    }

    /** 大纲级别 */
    @Input() level = 3;

    /** 监听文档更改 */
    observer?: Subscription;

    /** 当前活跃 ID */
    _currentId?: string;
    /** 当前活跃 ID */
    @Input() get currentId(): string | undefined {
        return this._currentId;
    }
    /** 当前活跃 ID */
    set currentId(value: string | undefined) {
        this._currentId = value;
        const nav = this.nav?.nativeElement;
        if (nav && this.items) {
            const item = this.items.find((i) => i.nativeElement?.dataset?.id === value);
            if (item) {
                nav.scrollTo({
                    top: item.nativeElement.offsetTop - nav.clientHeight / 4,
                    behavior: 'smooth',
                });
            }
        }
    }

    /** 滚动遮罩信息 */
    scrollInfo = {
        before: false,
        after: false,
    };

    /** 更新滚动 */
    updateScroll(): void {
        const nav = this.nav?.nativeElement;
        if (!nav) return;
        this.scrollInfo = {
            before: nav.scrollTop > 1,
            after: nav.scrollTop < nav.scrollHeight - nav.clientHeight - 1,
        };
    }
}
