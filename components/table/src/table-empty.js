export default {
    name:'FlyTableEmpty',
    props:{
        emptyText:String
    },
    render(){
        return (
            <table>
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