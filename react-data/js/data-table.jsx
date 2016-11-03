
/**
 * Column data types
 * Use these with the `columnMeta` property, which
 * can be set to an object like this: 
 * {
 *    count: {type: numeric, caption: "Count"}
 * }
 */
var columnTypes = {
    numeric: {
        formatter: function(value) {return numeral(value).format("0,0")},
        className: "text-right"
    },
    currency: {
        formatter: function(value) {return numeral(value).format("$0,0.00")},
        className: "text-right"        
    },
    date: {
        formatter: function(value) {return moment(value).format("l")}
    }
};

class DataTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //get the keys of the first object in the array
        //if array is empty, default to emtpy set of keys
        var keys = this.props.records.length > 0 ? 
            Object.keys(this.props.records[0]) : 
            [];

        //default column meta data to empty object
        var colMeta = this.props.columnMeta || {};
        
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        {keys.map(key => {
                            var caption = key;                            
                            if (colMeta[key] && colMeta[key].caption) {
                                caption = colMeta[key].caption;
                            }
                            var className;
                            if (colMeta[key] && colMeta[key].type) {
                                className = colMeta[key].type.className;
                            }
                            return <th key={key} className={className}>{caption}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.props.records.map(record => {
                        return (
                            <tr key={record.name}>
                                {keys.map(key => {

                                    var value = record[key];
                                    var className;
                                    if (colMeta[key] && colMeta[key].type) {
                                        value = colMeta[key].type.formatter(value);
                                        className = colMeta[key].type.className;
                                    }

                                    return <td key={key} className={className}>{value}</td>
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}