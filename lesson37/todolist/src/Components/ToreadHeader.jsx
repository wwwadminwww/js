import React from 'react';
import './ToreadHeader.css';

function ToreadHeader(){
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