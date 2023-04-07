/**
 * Given Employee interface which is used to get predefined type of response
 */
export class EmployeeResponseType {
    public id!: string;                     // available
    public firstName!: string;              // available    
    public lastName!: string;               // available
    public name!: string;
    public displayName!: string;            // available
    public dateOfBirth?: Date;             // available
    public avatarUrl?: string;
    public personalPhoneNumber!: string;
    public workEmail!: string;              // available
    public jobTitle?: string;              // available
    public department!: string;             // available
    public managerId?: string;
    public startDate?: Date;               // available
    public tenure?: number;
    public workAnniversary?: Date;
}