export type Employer = {
    id: number;
    val: string;
    pos: Postition;
    comp: Company;
    section: WorkingSpeciality;
    activity: boolean;
    avatar: string;
}

export type Postition = 'manager'|'QA'| 'developer'| 'analytics'| undefined;
export type Company = 'sber'| 'vtb'| 'tink'| 'raif'| undefined;
export type WorkingSpeciality = 'credit'| 'debit'| 'guarantee'| 'vallet'| undefined;
