import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';

/**
 * 提供文档内容
 */
@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    constructor(readonly breakpointObserver: BreakpointObserver) {}

    /** 显示模式 */
    readonly displayMode = combineLatest(
        this.breakpointObserver.observe([Breakpoints.XSmall]),
        this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium]),
    ).pipe(
        map(([s, m]) => {
            if (s.matches) return 'small';
            if (m.matches) return 'medium';
            return 'large';
        }),
    );

    /** */
    readonly sidenavMode = this.displayMode.pipe<MatDrawerMode>(
        map((s) => (s === 'small' ? 'over' : s === 'medium' ? 'push' : 'side')),
    );
}