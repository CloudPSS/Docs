import { Component, Input } from '@angular/core';
import { SourceService } from '@/services/source';
import { map } from 'rxjs/operators';
import { combineLatest, from } from 'rxjs';
import { NavBaseComponent } from '../nav-base';
import { GlobalService } from '@/services/global';

/**
 * 显示md文档
 */
@Component({
    selector: 'app-navbar',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class NavbarComponent extends NavBaseComponent {
    constructor(readonly source: SourceService, readonly global: GlobalService) {
        super();
    }

    /** 显示分类 */
    @Input() showCategories = true;

    /** 导航栏列表 */
    readonly nav = combineLatest([this.global.language, this.source.current]).pipe(
        map(([lang, info]) => info.manifest.sitemap[lang].children.filter((c) => c.order != null)),
    );

    readonly searchResults = from(['1', '2', '3', '4', '5']);
}
