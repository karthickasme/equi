import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() currdevice;
  collection = [
{
  cardno: 1,
  imgurl: '/assets/multimodal.jpg',
  notes: 'Bacon ipsum dolor amet corned beef biltong short loin frankfurter. Shoulder bresaola tongue chuck, boudin buffalo meatloaf andouille chicken picanha alcatra cow fatback t-bone prosciutto. Biltong meatloaf shank, beef boudin brisket prosciutto andouille burgdoggen turducken. Jerky alcatra porchetta swine prosciutto, andouille shank pig beef ribs burgdoggen capicola. Pork swine frankfurter, rump ham hock beef ribs ham ball tip jerky turkey ground round prosciutto.'
},
{
  cardno: 2,
  imgurl: 'https://images.huffingtonpost.com/2015-03-22-1427023616-8757697-BlackBeanSaladwithChipotleVinaigrette.jpg',
  notes: 'Bacon ipsum dolor amet corned beef biltong short loin frankfurter. Shoulder bresaola tongue chuck, boudin buffalo meatloaf andouille chicken picanha alcatra cow fatback t-bone prosciutto. Biltong meatloaf shank, beef boudin brisket prosciutto andouille burgdoggen turducken. Jerky alcatra porchetta swine prosciutto, andouille shank pig beef ribs burgdoggen capicola. Pork swine frankfurter, rump ham hock beef ribs ham ball tip jerky turkey ground round prosciutto.'
},
{
  cardno: 3,
  imgurl: '/assets/multimodal.jpg',
  notes: 'Bacon ipsum dolor amet corned beef biltong short loin frankfurter. Shoulder bresaola tongue chuck, boudin buffalo meatloaf andouille chicken picanha alcatra cow fatback t-bone prosciutto. Biltong meatloaf shank, beef boudin brisket prosciutto andouille burgdoggen turducken. Jerky alcatra porchetta swine prosciutto, andouille shank pig beef ribs burgdoggen capicola. Pork swine frankfurter, rump ham hock beef ribs ham ball tip jerky turkey ground round prosciutto.'
},
{
  cardno: 4,
  imgurl: 'https://images.huffingtonpost.com/2015-03-22-1427023616-8757697-BlackBeanSaladwithChipotleVinaigrette.jpg',
  notes: 'Bacon ipsum dolor amet corned beef biltong short loin frankfurter. Shoulder bresaola tongue chuck, boudin buffalo meatloaf andouille chicken picanha alcatra cow fatback t-bone prosciutto. Biltong meatloaf shank, beef boudin brisket prosciutto andouille burgdoggen turducken. Jerky alcatra porchetta swine prosciutto, andouille shank pig beef ribs burgdoggen capicola. Pork swine frankfurter, rump ham hock beef ribs ham ball tip jerky turkey ground round prosciutto.'
},
{
  cardno: 5,
  imgurl: '/assets/multimodal.jpg',
  notes: 'Bacon ipsum dolor amet corned beef biltong short loin frankfurter. Shoulder bresaola tongue chuck, boudin buffalo meatloaf andouille chicken picanha alcatra cow fatback t-bone prosciutto. Biltong meatloaf shank, beef boudin brisket prosciutto andouille burgdoggen turducken. Jerky alcatra porchetta swine prosciutto, andouille shank pig beef ribs burgdoggen capicola. Pork swine frankfurter, rump ham hock beef ribs ham ball tip jerky turkey ground round prosciutto.'
},
{
  cardno: 6,
  imgurl: 'https://images.huffingtonpost.com/2015-03-22-1427023616-8757697-BlackBeanSaladwithChipotleVinaigrette.jpg',
  notes: 'Bacon ipsum dolor amet corned beef biltong short loin frankfurter. Shoulder bresaola tongue chuck, boudin buffalo meatloaf andouille chicken picanha alcatra cow fatback t-bone prosciutto. Biltong meatloaf shank, beef boudin brisket prosciutto andouille burgdoggen turducken. Jerky alcatra porchetta swine prosciutto, andouille shank pig beef ribs burgdoggen capicola. Pork swine frankfurter, rump ham hock beef ribs ham ball tip jerky turkey ground round prosciutto.'
},

];
  constructor() { }

  ngOnInit(): void {

  }

get()
{
  console.log(this.currdevice);
}
}
