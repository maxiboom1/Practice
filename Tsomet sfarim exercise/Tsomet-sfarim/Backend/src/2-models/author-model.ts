class AuthorModel{
    public authorId: number;
    public authorFirstName: string;
    public authorLastName: string;

    public constructor (author: AuthorModel){
        this.authorId = author.authorId;
        this.authorFirstName = author.authorFirstName;
        this.authorLastName = author.authorLastName;
    }

}

export default AuthorModel;