/* eslint-disable prettier/prettier */
export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}
export const data :Data = {
  report: [
    {
        id: "uuid1",
        source: "Udemy",
        amount: 4000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME,
      },
    {
        id: "uuid2",
        source:  "Coursera",
        amount: 3000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME,
      },
    {
        id: "uuid3",
        source: "Plural Site",
        amount: 1500,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME,
      },
    {
        id: "uuid4",
        source: "Audacity",
        amount: 3500,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME,
      },
    {
        id: "uuid5",
        source:  "Food",
        amount: 1000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.EXPENSE,
      },
    {
        id: "uuid6",
        source: "Allocation",
        amount: 1500,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.EXPENSE,
      },
    {
        id: "uuid7",
        source: "Car",
        amount: 500,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.EXPENSE,
      }
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}


data.report.push({
    id: "uuid",
    source: "Salary",
    amount: 7500,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME,
})
