import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IAlbum } from '@lo/core';

@Component({
  selector: 'lo-modal-album',
  templateUrl: './modal-album.component.html',
  styleUrls: ['./modal-album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalAlbumComponent {

  @Input()
  public album: IAlbum;

  constructor() { }

}
