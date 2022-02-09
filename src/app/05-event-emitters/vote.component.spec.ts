import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment voteChanged event when upvoted', () => {
    let totalVotes = 0;
    component.voteChanged.subscribe(tv => totalVotes = tv)

    component.upVote();

    //expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
  });
});
