import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
export const AppRoutes = [
    {
        path: '',
        redirectTo: '/repos',
        pathMatch: 'full'
    },
    {
        path: 'repos',
        component: RepoListComponent
    },
    {
        path: 'repos/:owner/:repo',
        component: RepoDetailComponent
    }
];
