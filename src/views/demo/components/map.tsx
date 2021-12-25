const clickItem = new Map();

const countClickTime = (el: number): void => {
  const count = clickItem.get(el) ? clickItem.get(el) : 0;
  clickItem.set(el, count + 1);
  console.log(`第${el}点击了${clickItem.get(el)}次`);
};

const renderList = (): JSX.Element[] => {
  const res = [];
  for (let i = 0; i < 5; i += 1) {
    res.push(
      <div key={`${i}_${Date.now()}`} onClick={() => countClickTime(i)}>
        第{i}行
      </div>
    );
  }
  return res;
};
const Index = (): JSX.Element => <div>{renderList()}</div>;

export default Index;
