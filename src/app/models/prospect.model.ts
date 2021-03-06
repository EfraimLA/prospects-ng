export interface Prospect {
  id: number | undefined;
  name: string | undefined;
  lastName: string | undefined;
  birthdate: Date | undefined;
  gender: string | undefined;
  nationality: string | undefined;
  maritalStatus: string | undefined;
  economicDependents: number | undefined;
  grade: string | undefined;
  income: number | undefined;
  incomeValidation: string | undefined;
  jobAntiquity: number | undefined;
  creditHistory: boolean | undefined;
  actualCredit: string | undefined;
  score: number | undefined;
  createdAt: Date | undefined;
}

export class ProspectObject implements Prospect {
  id: number | undefined;
  name: string | undefined;
  lastName: string | undefined;
  birthdate: Date | undefined;
  gender: string | undefined;
  nationality: string | undefined;
  maritalStatus: string | undefined;
  economicDependents: number | undefined;
  grade: string | undefined;
  income: number | undefined;
  incomeValidation: string | undefined;
  jobAntiquity: number | undefined;
  creditHistory: boolean | undefined;
  actualCredit: string | undefined;
  score: number | undefined;
  createdAt: Date | undefined;

}
