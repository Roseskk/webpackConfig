import moment from "moment";

export default class Service {

    static dateCreator () {
        return  moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
    }

}