export default function () {
  this.transition(
    this.fromRoute('index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('speaking.past'),
    this.toRoute('speaking.upcoming'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
