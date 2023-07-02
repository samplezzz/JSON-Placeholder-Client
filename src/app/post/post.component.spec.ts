import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  const mockPost = {
    id: 2,
    userId: 4,
    title: 'Mock title',
    body: 'Mock body',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostComponent],
    });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = mockPost;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle `title` and `userId`', () => {
    expect(component).toBeTruthy();

    let viewSnapshot = view();
    expect(
      viewSnapshot.title.nativeElement.classList.contains('active')
    ).toBeTruthy();
    expect(
      viewSnapshot.userId.nativeElement.classList.contains('active')
    ).toBeFalsy();

    viewSnapshot.title.nativeElement.click();
    fixture.detectChanges();
    viewSnapshot = view();

    expect(
      viewSnapshot.title.nativeElement.classList.contains('active')
    ).toBeFalsy();
    expect(
      viewSnapshot.userId.nativeElement.classList.contains('active')
    ).toBeTruthy();
  });

  function view() {
    return {
      title: fixture.debugElement.query(By.css('.title')),
      userId: fixture.debugElement.query(By.css('.user-id')),
    };
  }
});
