import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ModalComponent } from '@lo/components';
import { albums, IAlbum, videos } from '@lo/core';

@Component({
  selector: 'lo-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicPageComponent {

  public albums = albums;

  public videos = videos;

  public albumModalOpen = false;

  public selectedAlbum: IAlbum;

  @ViewChild('AlbumModal', { static: false })
  private albumModal: ModalComponent;

  constructor() { }

  public openAlbumModal(album: IAlbum): void {

    this.selectedAlbum = album;

    this.albumModal.open();
  }

}
