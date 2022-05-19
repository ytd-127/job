import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        name:{
            type: String
        }
    },
    setup(props){
    const countRef =ref(1)
    const render=()=>{
        return <div>{props.name}</div>
    }

    return render
    }
})