/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import { markdownToHTMLElement } from "../src/markdownConverter";

// This function assists in allowing to write template literals while ignoring indent
function removeLeadingWhitespace(string) {
  return string.replace(/^[ \t]+/gm, "");
}

describe("markdown to html converter", () => {
  describe("paragraphs", () => {
    test("generate a paragraph for each line not starting with special symbols", () => {
      const container = markdownToHTMLElement(
        removeLeadingWhitespace(
          `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis libero urna. Duis sodales dui id eleifend euismod. Praesent vestibulum eros tortor. Nunc et mauris est. Nullam viverra mauris vitae vehicula commodo. Donec nec arcu consequat, congue eros at, pharetra dolor. Aenean aliquet nisi eros. Morbi eu sagittis eros. Curabitur eu dui eget leo imperdiet facilisis in quis dui.
                    Vestibulum porta posuere erat nec laoreet. Donec posuere mi lorem, at aliquam purus dapibus nec. Nulla sit amet vehicula ex. Nam vestibulum scelerisque posuere. Pellentesque ut viverra mi. Cras egestas justo lacus, id hendrerit nunc finibus tincidunt. Quisque dui ipsum, ultricies eget gravida aliquam, interdum in sem. Ut at finibus odio.
                    Aliquam ut lacus quis nisi rutrum faucibus sit amet vitae neque. Curabitur venenatis posuere lorem. Donec dictum hendrerit orci eget aliquam. Quisque lacinia ligula ex. Maecenas non sapien augue. Nullam convallis neque eget mauris efficitur, sed vestibulum leo aliquam. Nam volutpat porta sapien, non ultricies nunc porta id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi id eros sit amet velit elementum dignissim. Mauris aliquam tellus lorem, sit amet auctor neque efficitur in. Fusce sodales felis enim, a suscipit ex eleifend non.
                    Nam nec bibendum nunc. Cras porta tempus turpis, et elementum turpis auctor et. Aliquam blandit tortor ex, sit amet placerat felis viverra pretium. Donec sit amet mauris auctor, bibendum ipsum non, venenatis diam. Aenean non diam bibendum, iaculis sem vel, consequat ipsum. Proin lobortis, eros non fermentum pretium, ex mauris malesuada sapien, ut tincidunt massa augue eu enim. In tristique magna eu massa placerat, at luctus tortor ullamcorper. Curabitur non nisi venenatis, ultricies mauris eu, eleifend tortor. Maecenas orci metus, maximus id mauris in, laoreet eleifend ipsum. Curabitur eu mi tincidunt, tincidunt ex ac, euismod ipsum. Nunc sit amet pharetra leo, a mollis sem.
                    Quisque malesuada ipsum ac risus dignissim, ut tincidunt metus mattis. Etiam aliquam vehicula elit eu lacinia. Sed imperdiet porta risus consequat finibus. Curabitur eu porta nisl. Nulla facilisi. Vestibulum in vestibulum nunc. Etiam fringilla dolor eget vehicula pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent luctus odio eu leo ultricies, et ultricies dolor tempus. Etiam commodo scelerisque mi ut sagittis. Fusce blandit, magna in consectetur congue, nisl massa pharetra quam, ac molestie nulla ligula sit amet mi. Sed nec nunc a elit dictum suscipit et ut diam. Suspendisse scelerisque mauris eget nunc vehicula, vitae rhoncus est semper. Cras consectetur consequat nisi, ut hendrerit nibh. 
                    `
        )
      );

      //Confirm that the container has 5 elements and that all those elements are paragraphs.
      expect(container.childElementCount).toBe(5);
      expect(container.querySelectorAll("p")).toHaveLength(5);
      expect(container.childNodes[0]).toHaveTextContent(
        /^Lorem ipsum dolor sit/
      );
      expect(container.childNodes[3]).toHaveTextContent(
        /^Nam nec bibendum nunc/
      );
    });

    test("Ignores empty lines", () => {
      const container = markdownToHTMLElement(
        removeLeadingWhitespace(
          `
                    Lorem ipsum dolor


                    sit atem.
                    `
        )
      );

      expect(container.childElementCount).toBe(2);
    });
  });

  describe.skip("headings", () => {
    test("supports each possible heading", () => {
      const container = markdownToHTMLElement(
        removeLeadingWhitespace(
          `
                    # Nunc in
                    ## Ornare eros
                    ### Proin
                    #### Vitae arcu quis
                    ##### Felis dignissim
                    ###### Malesuada
                    `
        )
      );

      expect(container.childElementCount).toBe(6);
      expect(container.querySelector("h1")).toHaveTextContent("Nunc in");
      expect(container.querySelector("h2")).toHaveTextContent("Ornare eros");
      expect(container.querySelector("h3")).toHaveTextContent("Proin");
      expect(container.querySelector("h4")).toHaveTextContent(
        "Vitae arcu quis"
      );
      expect(container.querySelector("h5")).toHaveTextContent(
        "Felis dignissim"
      );
      expect(container.querySelector("h6")).toHaveTextContent("Malesuada");
    });

    test("supports a mixture of paragraphs and headings", () => {
      const container = markdownToHTMLElement(
        removeLeadingWhitespace(
          `
                    # Proin porta
                    ## Urna
                    Ut aliquet dictum. Aenean tristique lacinia nunc, in posuere augue auctor at.

                    Etiam sed sodales nibh. Nunc eu lorem tincidunt, consequat sapien id, venenatis velit.
                    ## Viverra elit nec
                    Aliquam elit ex, lobortis at turpis ac.
                    ### Elit ex
                    Donec congue dictum tellus. Aenean eu massa in mauris accumsan suscipit. Aenean sit amet quam dignissim, porttitor neque sit amet, laoreet arcu.
                    `
        )
      );

      expect(container.childElementCount).toBe(8);
      expect(container.querySelectorAll("h1")).toHaveLength(1);
      expect(container.querySelectorAll("h2")).toHaveLength(2);
      expect(container.querySelectorAll("h3")).toHaveLength(1);
      expect(container.querySelectorAll("p")).toHaveLength(4);
      expect(container.querySelectorAll("h2")[1]).toHaveTextContent(
        "Viverra elit nec"
      );
      expect(container.querySelectorAll("p")[2]).toHaveTextContent(
        /^Aliquam elit ex/
      );
    });
  });

  describe.skip("unordered lists", () => {
    test("supports unindented unordered lists", () => {
      const container = markdownToHTMLElement(
        removeLeadingWhitespace(
          `
                    - Maecenas eros justo
                    - Posuere vel mattis nec
                    - Donec tempus sagittis

                    New List

                    - Auctor laoreet
                    - Nam dictum orci sed
                    `
        )
      );

      expect(container.childElementCount).toBe(3);
      expect(container.querySelector("ul").querySelectorAll("li")).toHaveLength(
        3
      );
      expect(
        container.querySelectorAll("ul")[0].childNodes[2]
      ).toHaveTextContent("Donec tempus sagittis");
      expect(
        container.querySelectorAll("ul")[1].childNodes[0]
      ).toHaveTextContent("Auctor laoreet");
    });
  });
});
