import React from 'react'

export default class CourseCard extends React.Component {
    render() {
        return (
            <div className="card" style={{width: '15rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                     <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">计算机系统由计算机硬件和软件两部分组成。 硬件包括中央处理机、存储器和外部设备等；
                            软件是计算机的运行程序和相应的文档。 计算机系统具有接收和存储信息、按程序快速计算和判断并输出处理结果等功能。
                            常见的系统有Windows，Linux等。</p>
                        <a href="#" className="btn btn-secondary">More...</a>
                     </div>
            </div>
        );
    }
}


