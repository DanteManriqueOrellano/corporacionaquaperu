import { Directive,EventEmitter,Output,HostListener } from '@angular/core';

@Directive({
  selector: '[dropzone]'
})
export class DropZoneDirective {

  @Output() public dropped = new EventEmitter<FileList>() 
  @Output() public hovered = new EventEmitter<boolean>()

  @HostListener('drop',['$event'])
  public onDrop($event){
    $event.preventDefault();
    this.dropped.emit( $event.dataTransfer.files);
    this.hovered.emit(false);
  }
  @HostListener('dragover',['$event'])
  public onDragOver($event){
    $event.preventDefault();
    this.hovered.emit(true);
  }
  @HostListener('dragleave',['$event'])
  public onDragLeave($event){
    $event.preventDefault();
    this.hovered.emit(false)
  }

}
