export interface Newspaper{
    id: number;
    title: string;
    issueNo: number;
    description: string;
    publisherId: number;
    publisher: {
      id: number;
      fullName: string;
    };
}

