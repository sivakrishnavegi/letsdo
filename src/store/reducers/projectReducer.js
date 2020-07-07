const initState ={
 projects :[
     {id :'1', title : 'Learning Mangement System', content: ' love me like u do..'},
     {id :'2', title : 'School Mangement System', content: ' love me like u do..'},
     {id :'3', title : 'Bike Mangement System', content: ' love me like u do..'},
 ]
}
const projectReducer = (state=initState,action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created PROJECT',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }

}

export default projectReducer;