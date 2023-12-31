import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { Post } from '../../model/post.model';

@Component({
  selector: 'jp-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  readonly displayUserId = signal(false);
  @Input({ required: true }) post!: Post;

  toggleDisplayUserId() {
    this.displayUserId.set(!this.displayUserId());
  }
}
