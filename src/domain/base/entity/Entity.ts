import UniqueEntityID from "../valueObject/uniqueEntityID/UniqueEntityID";

const isEntity = (v: any): v is Entity<any, any> => {
    return v instanceof Entity;
};

export default abstract class Entity<T, I> {
    protected readonly _id: UniqueEntityID<I>;
    protected props: T;

    constructor(props: T, id: UniqueEntityID<I>) {
        this._id = id;
        this.props = props;
    }

    public equals(object?: Entity<T, I>): boolean {
        if (object === null || object === undefined)
            return false;

        if (!isEntity(object))
            return false;

        if (this === object)
            return true;

        return this._id.isEqual(object._id);
    }
}