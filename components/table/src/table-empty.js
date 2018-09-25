export default {
    name:'FlyTableEmpty',
    props:{
        style:Object,
        emptyText:String
    },
    render(){
        return (
            <table style={this.style}>
                <tbody>
                    <tr>
                        <td>
                            <div>{this.emptyText}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}