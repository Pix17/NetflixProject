import { Component, OnInit } from '@angular/core';
import { IAccount } from '@models/interfaces';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'us-add-user',
  templateUrl: './us-add-user.component.html',
  styleUrls: ['./us-add-user.component.scss'],
})
export class UsAddUserComponent implements OnInit {
  account!: IAccount;
  username!: string;
  imgList: string[] = [
    'https://i.pinimg.com/736x/fd/2c/aa/fd2caa9fd03a24a112ce4f20b51d66de.jpg',
    'https://i.pinimg.com/474x/38/93/8b/38938bf56687ffaa7a3a2dae4c6e8d12.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpk8QfkDgiJRUF_uTzxrIRC_G-VsxsSlB5hurUy1R2F6MoVos6ukbkSyCEFFBkrsTEtiU&usqp=CAU',
    'https://i.pinimg.com/originals/7d/ad/68/7dad68f5621e8b7d675eac0bbb904c33.jpg',
    'https://i.pinimg.com/550x/df/2e/a4/df2ea433cbcb184f316efad584d82351.jpg',
    'https://i.pinimg.com/originals/60/87/ed/6087ed0551ade6a795b06580293c99eb.jpg',
  ];

  defImg: string =
    'https://image.shutterstock.com/image-vector/add-create-profile-photo-icon-260nw-2023504886.jpg';
  //
  title = 'appBootstrap';
  closeResult!: string;
  //

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.account = JSON.parse('' + localStorage.getItem('accountChosen'));
  }

  addUser() {
    this.account = JSON.parse('' + localStorage.getItem(this.account.email));

    this.account.users?.push({
      user: this.username,
      img: this.defImg
    });

    localStorage.setItem(this.account.email, JSON.stringify(this.account));
    localStorage.setItem('accountChosen', JSON.stringify(this.account));
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'myLargeModalLabel' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  imgChose(img: string) {
    this.defImg = img;
  }
}
