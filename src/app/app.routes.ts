import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { CvPage } from './cv/cv-page/cv-page';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { Color } from './components/color/color';
import { Second } from './components/second/second';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404 } from './components/nf404/nf404';

// /cv
export const routes: Routes = [
  { path: '', component: First},
  { path: 'cv', component: CvPage},
  { path: 'cv/:id', component: DetailsCvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'word', component: MiniWordComponent},
  { path: 'color', component: Color},
  { path: 'hello/:name', component: Second},
  { path: '**', component: NF404},
];
