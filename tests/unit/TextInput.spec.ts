import { shallowMount } from "@vue/test-utils";
import TextInput from "@/components/TextInput.vue";

describe("TextInput.vue", () => {
  it("renders placeholder when passed", () => {
    const placeholder = "Enter your name...";
    const wrapper = shallowMount(TextInput, {
      propsData: {
        placeholder: placeholder,
      },
    });

    expect(wrapper.find("input").attributes("placeholder")).toBe(placeholder);
  });

  //Test input insertion
  it("updates inputValue when input changes", async () => {
    const wrapper = shallowMount(TextInput);
    const input = wrapper.find("input");

    await input.setValue("Hey");

    expect(wrapper.find("input").vm.$data.inputValue).toBe("Hey");
  });
});
