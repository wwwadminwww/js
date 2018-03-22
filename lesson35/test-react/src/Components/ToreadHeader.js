import React from 'react';

function ToreadHeader(props){
    return (
        <table className="ToreadHeader">
              <tr>
                <td>Всего:</td>
                <td>В планах:</td>
                <td>Прочитано:</td>
                <td>Активно:</td>
              </tr>
        </table>
    );
}

export default ToreadHeader;