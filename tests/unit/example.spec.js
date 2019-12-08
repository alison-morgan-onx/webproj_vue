import { shallowMount } from "@vue/test-utils";
import Banner from "@/components/Banner.vue";

describe("Banner.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Banner, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
