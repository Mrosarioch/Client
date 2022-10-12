import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../interfaces/User'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[];

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(
        res => this.users = res,
        err => console.log(err)
      )
  }

  deleteUser(id: string): void {
    if(confirm('Seguro que Desea Eliminar'))
    this.userService.deleteUser(id)
      .subscribe(
        res => {
          console.log(res);
          this.getUsers();
        },
        err => console.log(err)
      )
  }
  faTrash = faTrash;
  faPen=faPen;
}
