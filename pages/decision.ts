export interface IDecision {
    [value: string]: string,
    description: string,
    

};

export interface IDecisions {
    decisions: IDecision[];

}