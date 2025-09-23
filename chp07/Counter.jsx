import {useState, useEffect} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    // 클래스 컴포넌트에서 컴포넌트가 마운트 되었을 때, 컴포넌트가 업데이터(변경)되었을 때
    // 자동으로 호출되는 callback 메소드가 함수형 컴포넌트에는 존재하지 않기 때문에
    // useEffect를 사용할 수 있다
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`;
    })

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count+1)}>
                클릭
            </button>
        </div>
    )
}

export default Counter;