import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import HiChild from "@/components/HiChild.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("HiChild.vue", () => {
  it("renders props.msg when passed", () => {
    const message = "hello there!";
    const wrapper = shallowMount(HiChild, {
      props: { message },
    });
    expect(wrapper.text()).toMatch(message);
  });
});
