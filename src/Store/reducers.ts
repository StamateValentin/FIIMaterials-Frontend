import {
    GET_CLASSES,
    GET_LINKS,
    GET_USER_ADVANCED_DATA,
    GET_USER_DATA,
    SET_AUTH_STATUS,
    SET_MATERIALS_LOADING,
    SET_LINKS_LOADING, SET_USER_DATA_LOADING, GET_RESOURCES, SET_RESOURCE_LOADING,
} from "./actions";


const initialState = {
    classes: [
        {
            id: 0,
            name: "Lorem Ipsum",
            name_short: "",
            average_rating: 0.0,
            credits: 0,
            material_link: "",
            site_link: "",
            site_password: "",
            year: 1,
            semester: 1,
            votes_number: "",
            updated_at: "",
        }
    ],
    links: [
        {
            name: "Link",
            link: "",
            type: "",
        }
    ],
    resources: [
        {
            title: "Title",
            image_url: "https://img.youtube.com/vi/lPx0n6X0d8g/0.jpg",
            link_url: "https://www.youtube.com/watch?v=lPx0n6X0d8g",
            description: "Lorem ipsum dolor sit amet",
            tag_list: "fun",
        },
    ],


    userData: {
        username: "User",
        email: "user@email.com",
    },
    userAdvancedData: {

    },


    userIsAuth: false,

    userDataLoading: false,
    materialsLoading: false,
    linksLoading: false,
    resourcesLoading: false,
}

function reducers(state = initialState, action: any) {
    switch (action.type) {
        case GET_CLASSES:
            return {
                ...state,
                classes: action.data,
            };
        case GET_LINKS:
            return {
                ...state,
                links: action.data,
            };
        case SET_AUTH_STATUS:
            return {
                ...state,
                userIsAuth: action.data,
            }
        case GET_USER_DATA:
            return {
                ...state,
                userData: action.data,
            }
        case GET_USER_ADVANCED_DATA:
            return {
                ...state,
                userAdvancedData: action.data,
            }
        case SET_MATERIALS_LOADING:
            return {
                ...state,
                materialsLoading: action.data,
            }
        case SET_LINKS_LOADING:
            return {
                ...state,
                linksLoading: action.data,
            }
        case SET_USER_DATA_LOADING:
            return {
                ...state,
                userDataLoading: action.data,
            }
        case GET_RESOURCES:
            return {
                ...state,
                resources: action.data,
            }
        case SET_RESOURCE_LOADING:
            return {
                ...state,
                resourcesLoading: action.data,
            }
        default:
            return state;

    }
}

export default reducers