import  {IDecision, IDecisions}  from './decision';

export class CFistToFive implements IDecisions {
    decisions = [
      {value: "0", description:'Blocked. I hate this'},
      {value: "1", description: 'Major Conerns. Stop being dumb'},
      {value: "2", description: "Getting onboard, still some concerns"},
      {value: "3", description: "Bought in, but I have reversations"},
      {value: "4", description: "Absolutely, let's do this"},
      {value: "5", description: "OMG THIS IS THE BEST THING EVER CAN I PLEASE LEAD IT"}
];
}

export const FistToFive : IDecision[] = [
          {value: "0", description:'Blocked. I hate this'},
          {value: "1", description: 'Major Conerns. Stop being dumb'},
          {value: "2", description: "Getting onboard, still some concerns"},
          {value: "3", description: "Bought in, but I have reversations"},
          {value: "4", description: "Absolutely, let's do this"},
          {value: "5", description: "OMG THIS IS THE BEST THING EVER CAN I PLEASE LEAD IT"}
    ];
