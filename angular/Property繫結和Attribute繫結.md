# Property 繫結

透過 Property 繫結，我們可以將元件的屬性值綁定到模板中，使得當屬性值發生變化時，模板中對應的內容也會跟著更新。

以下是一個 Property 繫結的範例：

```ts
@Component({
  selector: "app-property-binding",
  template: ` <img [src]="imageUrl" /> `,
})
export class PropertyBindingComponent {
  imageUrl = "https://example.com/image.jpg";
}
```

#Attribute 繫結
在 Angular 中，我們也可以使用屬性繫結 (Attribute Binding) 來繫結元素的屬性。以下是一個簡單的範例：

```ts
@Component({
  selector: "app-attribute-binding",
  template: ` <div [attr.id]="elementId"></div> `,
})
export class AttributeBindingComponent {
  elementId = "myDiv";
}
```
