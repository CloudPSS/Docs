import { Output, EventEmitter, Component } from '@angular/core';
import { DocumentItem } from '@/interfaces/manifest';
import { NavigateEventSource, NavigateEvent } from '@/interfaces/navigate';

/**
 * 导航控件的基类
 */
@Component({
    template: '',
})
export class NavBaseComponent implements NavigateEventSource {
    /** @inheritdoc */
    @Output() navigate = new EventEmitter<NavigateEvent>();

    /**
     * 触发导航事件
     */
    onNavigate(item?: DocumentItem): void {
        if (!item) return;
        if (item.path) {
            this.navigate.next(new NavigateEvent(item.path.parsed));
        } else {
            this.onNavigate(item.children[0]);
        }
    }
}
