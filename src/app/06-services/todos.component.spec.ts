import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, of } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service); //pass in fake service
  });

  it('should set todos property with items returned from server', () => {
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      //this.http.get('...').pipe(map(r => r));
      return of([todos]);
    });

    component.ngOnInit();

    //expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos.length).toBe(todos);
  });
});
