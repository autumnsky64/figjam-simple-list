const { widget } = figma
const {
  AutoLayout,
  Input,
  Frame,
  useSyncedState
} = widget

function WpPageModel() {
  const placeholders = ["path", "template php", "memo"]
  const [title, setTitle] = useSyncedState("title","")
  const [items, setItem] = useSyncedState("items",["", "", ""])

  const borderColor = "#696969"
  const titleBgColor = "#e0ffff"

  return (
    <AutoLayout
      width={320}
      direction="vertical"
      verticalAlignItems="center"
      horizontalAlignItems="center"
      stroke={borderColor}
    >
      <AutoLayout
        width="fill-parent"
        padding={{
          vertical: 16
        }}
        fill={titleBgColor}
        stroke={titleBgColor}
      >
        <Input
          placeholder="page title"
          value={title}
          width="fill-parent"
          fontSize={24}
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
            fill={borderColor}
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