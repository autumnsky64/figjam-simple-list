const { widget } = figma
const {
  AutoLayout,
  Input,
  Frame,
  useSyncedState
} = widget

function WpPageModel() {
  const placeholders = ["path", "template php", "memo"]
  const [title, setTitle] = useSyncedState("title","title")
  const [items, setItem] = useSyncedState("items",["", "", ""])

  return (
    <AutoLayout
      width={320}
      direction="vertical"
      verticalAlignItems="center"
      horizontalAlignItems="center"
      stroke="#ccc"
    >
      <AutoLayout
        width="fill-parent"
        padding={{
          vertical: 16
        }}
        fill="#ada"
        stroke="#ada"
      >
        <Input
          placeholder="title"
          value={title}
          width="fill-parent"
          fontSize={24}
          fill="#040"
          horizontalAlignText="center"
          onTextEditEnd={(event)=> setTitle(event.characters)}
          />
      </AutoLayout>
      {items.map((item,i) => {
        return(
        <>
          <Frame
            height={1}
            width="fill-parent"
            name="Border"
            fill="#ccc"
            hidden={i === 0 ? true : false}
          >
          </Frame>
          <AutoLayout
            width="fill-parent"
            padding={{
              vertical: 16,
              bottom:0
            }}
            fill="#fff"
            >
            <Input
              value={item}
              placeholder={placeholders[i]}
              width="fill-parent"
              height={48}
              fontSize={24}
              horizontalAlignText="center"
              onTextEditEnd={(event)=> {
                const newItems = [...items]
                newItems[i] = event.characters
                setItem(newItems)
                }
              }
              />
          </AutoLayout>
        </>
        )
      })}
    </AutoLayout>

  )
}
widget.register(WpPageModel)