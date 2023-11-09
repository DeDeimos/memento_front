import instance from "../../shared/api";

export const createMoment = async (moment) => {
    console.log(moment);
    const response = await instance.post("/moments/create", moment);
    return response;
}