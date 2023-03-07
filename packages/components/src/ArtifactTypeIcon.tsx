import React, { FunctionComponent } from "react";
import { ArtifactTypes } from "@apicurio/apicurio-api-designer-models";
import styled from "styled-components";

const icon = (type: string | undefined): string => {
    switch (type) {
        case ArtifactTypes.AVRO:
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpSJVBwuKKGSoThbEijhKFYtgobQVWnUwufRDaNKQpLg4Cq4FBz8Wqw4uzro6uAqC4AeIk6OToouU+L+k0CLGg+N+vLv3uHsHCPUyU82OCUDVLCMVj4nZ3IoYeIUfA+jFCKISM/VEeiEDz/F1Dx9f7yI8y/vcn6NHyZsM8InEs0w3LOJ14ulNS+e8TxxiJUkhPiceN+iCxI9cl11+41x0WOCZISOTmiMOEYvFNpbbmJUMlXiKOKyoGuULWZcVzluc1XKVNe/JXxjMa8tprtMcRhyLSCAJETKq2EAZFiK0aqSYSNF+zMM/5PiT5JLJtQFGjnlUoEJy/OB/8LtbsxCddJOCMaDzxbY/RoHALtCo2fb3sW03TgD/M3CltfyVOjDzSXqtpYWPgL5t4OK6pcl7wOUOMPikS4bkSH6aQqEAvJ/RN+WA/luge9XtrbmP0wcgQ10t3QAHh8BYkbLXPN7d1d7bv2ea/f0Atdxywrw2q7cAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAAA/AAAAPwAdjlSsQAAAAHdElNRQfkAxcOJRujZ9LDAAACIUlEQVRIx7WUTUiUURSGn3NHQ9SiUAkShnCmCCaszwGJCMyodpUiIxX0I7WsRVDQJtBFbVy2DGvTpkU4CC0KyhYRbRrRRVkptbGwRSXaz+j0vW2+sVGY0m/Gs7rnnnvuc897DweKWq+L7TraTonmigWaWkbO4FzL2gBSqYjJegV1awJomphvB6IGa1OBE63BMgm9ruwA3ywvTf02L7Ov7ACTPi3CsK5yAwynNKDAPbF1/9mqsgB2tHbWxbyOYX+eWYM7wXaDm5k5WRbAQk7ngDZX6Z6ZuIkxAmCmS2E/e1mS6oNF3DeGJfqBx4idMW+0u2SAn9MAYjZwNxrcxSw4o75EIrWuJIA5d9zHugyNL8al/Dzanq2cv7xagBU6Ma/jm6DC4DYwA9YJShQc+fHbRZIfXt4fD9umXw1qgIvAVUyvMPUXxKsjvn+vuflwTSiA5C4Ac4FbgUghu7KsEZq/R6pvhavActNAN9J1sLGiuorplQIqlg45d0jGDcxNgZ4YSvtYrcEeYO9iDTAaCmDO0pKugRqBU8KWdkEe4GShJHqXGXyNdFDGI+BnwZW/gI8GXwKJWkO16XKLe8f6MBOyKqEocADYDMxhvjeZGZoIDYh7qQax8PkfqVMY5yczgw//Tt7VVWDx3Z0DMvX855FvEU/l9EI5PX8/NvRmxRIBNCWPRJ0fafNlnpm2IBox24BUi7EJWC/IOsgKHkyOpE8X5v8BqYO4S1taYfYAAAAASUVORK5CYII=";
        case ArtifactTypes.PROTOBUF:
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9TS4tUOthBxCFDdbIgKuIoVSyChdJWaNXB5KV/0KQhSXFxFFwLDv4sVh1cnHV1cBUEwR8QJ0cnRRcp8b6k0CLGC4/3cd49h/fuA4RWjalm3wSgapaRSSbEfGFVDL4igBAi8MEvMVNPZRdz8Kyve+qjuovzLO++P2tAKZoM8InEc0w3LOIN4plNS+e8TxxlFUkhPiceN+iCxI9cl11+41x2WOCZUSOXmSeOEovlHpZ7mFUMlXiaOKaoGuULeZcVzluc1VqDde7JXxguaitZrtMaQRJLSCENETIaqKIGC3HaNVJMZOg84eEfdvxpcsnkqoKRYwF1qJAcP/gf/J6tWZqadJPCCSDwYtsfo0BwF2g3bfv72LbbJ4D/GbjSuv56C5j9JL3Z1WJHQGQbuLjuavIecLkDDD3pkiE5kp+WUCoB72f0TQVg8BboX3Pn1jnH6QOQo1kt3wAHh8BYmbLXPd4d6p3bvz2d+f0A2ldyaogB3mcAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfkBQgPAjUjjLU3AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAvpJREFUSMftlWtIk1EYx59Nt+am02FTh5BKm7kSN0pTZoSW4gXF7PJJzUAykdR9WEVCSEoXpU/dVmmppVQ2mtLIUIQiK01wtFZmG7PVMmc6L+zmtvc9fdrYOxX9IhF0vp0fz///nPd9nuccUpY4DzZykWGD17+fwN8XSE20KIow6TiRkoASx+8t7bv9BgCg7Gj1nrEZTTYhBAEMmvXN5Nef9asmkB05RZ++dbXH/vypgCBmc9RLDvtF91auHxn9ZTY0Kx1zcd5hSQHsvPNnrojqGiVWN/PjpsR6AvapJqTYN00OwTyQabVHc9PFi2qjG9n0Bmd0FLdvFjeXWRBGcfNJlzXCaJxgO378ViyrQUZ8S8mC1liGvL8aIcCjY0olLp3G91cahkY1OSH8ctyH9y/qyzlpu4sICTL3PokfmAmUygT1YMa8JNzt16thUrZaAb+8HOxMo3Gu+fJX89o7wpzMHQAA5FSRjKEy4D0ODBhvmVwY4teCBccBbQ4fiqytk6zVJQ1Z4tNCKmvEm5kwB3145ms3Pz+LQTohtbRqTOiYpyiAQ83PtnkuUyessWv162lFhighaso+q/rkXGB689wQbivZ6cQJs4ABGTp4ZehZciNab6/LeCZoDzUgKvKRYBiFPG2cqWTT0IQ3n7YillLvevjokpy6lnnv5Zs0km3scQy1P7iDMenhAipLZ160VZCdlipLDAsroJCQzVs4ZUGis+2OxrUSkFTiJnC+S/ajAuwPHYZz/gvAIVGXUkJiCx1qrYUMAKBUFX/cxsIqfcUaExInCLoOrmb+oiT4MNgUVZ76bQKojHwPh4I55R8GBlSEORgfL26LCsLvEaYfAehM6EFiYtfWZeal0Tywqdt9eUBg6t36ggv3V7zs0gUBVeE0pPZmc3ZE/25C3SeL5HSPuSSDDraxbsDG6AR3vwQlbMmtzpUcWPku6pQXWplhLfnZvKAK35NhTtdOABgEAABX2C5giBQAIgUhaKHhRnZThJVQo/8v2l9P8Aec5y2nqHAz4gAAAABJRU5ErkJggg==";
        case ArtifactTypes.JSON:
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAC5HpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZdZjiQpDIbfOcUcAdsYm+MQLNLcYI4/PxFUbpXdUpf6MUHB4nAY48+QyjD++3eGf1DIs4ek5rnkHFFSSYUrBh6vcvUU09lek7zf0bM80NdHDJGgl2uax9avkOv9A0tbfjzLg7Vtx7eh/eLLoKyVGYO+ndyGhC857XkofA1qftjOfqRd5mjuj1/myRCMrrAnHHgISTxbvlaS66l49GwzFOkckxhalO/xC2s26vsA3kYv8Ytty+UejnBFdivklzhtOen7+J1RevSI+LYyP3qELeT4WB7iN2f3Oce1u5pyQLjy3tTXVs4RFA+E84pGRjU8irGdtaB6rLGBWsdWjxAPTAoxIj4pUadKk8bZN2pwMfFgQ8/cWE6Zi3HhJgtBWpUmW5AiXRycGsgJxHzzhc51y1oPizlW7gRNJhgD4+caXgU/rU+G5lxpThT9ihPSAn7xyi+4scitFlrplpTrmKw3FK4uvpYFVkBQzzA7NljjcZk4lO65JSdniRqgmuJ1Xsj6NoAQYW2FMyQgEDMSmzJFYzYixNHBp8JzlsQHCJAG5Q4vOQlOgrHzWhvfGJ26rHyJcb0AhErGIXEAqoCVkqaM8+ZIoRpUNKlqVlPXojVLTllzzpbXPVVNLJlaNjO3YtXFkytuMnP34rVwEVxjGkouVryUUisWranCVoV+heDgQ4506JEPO/woR21In5aattyseSutdu7ScQWEnrt176XXQQOpNNLQkYcNH2XUiVybMtPUmadNn2XWGzXax/aJ2iu531OjTY1PUEvP7tQgNvsyQes60cUMxDgRiNsigITmxSw6pcSL3GIWC0sQUYaXuuB0WsRAMA1inXRjdyf3S24B0f1TbvyOXFjo/ga5sNA9kPvO7Q21Xs/rVk5A6xQiprghBccPCsMre12/Sz/qw08//Bj6GPoY+hj6GPoY+hh610/8dBf8mfkfrc5zv6OMio4AAAGFaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1NrRVoU2kHEIUN1siAq4ihVLIKF0lZo1cHk0i9o0pCkuDgKrgUHPxarDi7Oujq4CoLgB4iTo5Oii5T4v6TQItaD4368u/e4ewcIjQpTzZ4JQNUsIxWPidncquh/hQ+9CGEQQYmZeiK9mEHX8XUPD1/vojyr+7k/R1DJmwzwiMRzTDcs4g3imU1L57xPHGYlSSE+Jx436ILEj1yXXX7jXHRY4JlhI5OaJw4Ti8UOljuYlQyVeJo4oqga5QtZlxXOW5zVSo217slfGMhrK2mu0xxBHEtIIAkRMmooowILUVo1UkykaD/WxT/s+JPkkslVBiPHAqpQITl+8D/43a1ZmJp0kwIxwPdi2x+jgH8XaNZt+/vYtpsngPcZuNLa/moDmP0kvd7WIkfAwDZwcd3W5D3gcgcYetIlQ3IkL02hUADez+ibckDoFuhfc3tr7eP0AchQV8s3wMEhMFak7PUu7+7r7O3fM63+fgAdt3KFSUnm6wAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAKbwAACm8BWEUG2wAAAAd0SU1FB+QFBhMRIjRTXEUAAAItSURBVEjHjZRLSNRRFMZ/+cCiTVNSGknQg7Qgo7AiI4oWrZopCqtVQiAuInpQUG0DKVq2iRYhtQ6CWrQIIiGYjYuUkTIbnaAppUJtZARl2nwXjrd7/+PZHO75zvnuvecFS2Ub8ATIA91Ul26gCPQDrTGnI0AJqAAF4PQyiNPAuGLmgIMhp89yuFqF7ATwGOgytruKHfSd1wmoACsTSM/LZ0QxTtaY+CXSbICWCOlq4AcwFfDZEyMGWBBwNEJ8Q/jZAHZG2M9Q4KDASwGsQUEDkUuvKPadM9QYcFh6lacBLgDrgXsR4rXSQyHionRFfTkL9MrWC4wCbyLEJelRZ6gzYL1JST/QATzSBQeAmwndMiL9X0ftACa9PtwFlPWDBWBDgLAJ2KQHfgImgO0O/K7gKV1g5Y6wV8BF4IXBOjVtfTrvM5P7B2BGh1mgzSOuA3KasuvySwNb9ZCsOgbgsC5aBMYcQZua/yOwwiM/pNy1iDgHfNWrNpt2LAhr8vP1UIGdCUUaMBNml9Qp2W6H2q0s3Z5A7L74G3jprVuA+RCx+1ZthPSkCugG4pzBXJttCRHv9l6Od+lz4K+KCHDN4NPSO0MvWlSejnn2GuCDsB7Znum8X+eMzpM+aaMpykYPu+UvGKXitWm19tjaTBmgwcPyKkprQlGbk/bxFwGXPft720YBqQXuKzYbcjiuyakA3zRh1SQD/FJM0RbPdsVbYC/w1NuxSZLSxD5QnnMO+AffLZYboB15IAAAAABJRU5ErkJggg==";
        case ArtifactTypes.OPENAPI:
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wEJEwES6K74lgAABPVJREFUSMetlVtsVFUUhr+9z9w6U0pToIXSggUCFaRaBQuxpZYqJJA06gOXNkokRiJSXyAQI9UYeSCRoFAEtInBcNMiAo1aK0ybWqsBYhsLVYRykcIAhd5mOjPtzJmzfZkp02EwPriTnXP2OXv9a61//Xsvwf80FhYVm4GN4akBu4AKGW9z+aFiyg8V/ytgSVluBDjyqQLYAiQBDmATsFfEA68sdUbeNWA2kKn7DP36Dz1uzSoV0FZzsHUgJgM/YIuBC5miV7tPF7A2z0n5oeIkYD1QAowD7MBFIcQ94Gmgp6Qstxn4sOZg64WwuS+OA8RI8Cb2nClY1N5hKRWwKnqj7gud76zr65YWURj1eQjBG57OMYeFVJeAjBj8PTLC5dq8JvlRQ/5rSlH3yETdYyju/YfaNgU9tlYh1c9h8GtAB+ACdtU3ONeKcME0pdhstokZC162J1odouDqDfMxn1+sEgL5kAx+DLjt7wQ8CVsQajHgHOp3vNjcUuNZWFRsqm9w6gARFRUKwcbgoFrZuM+bGPCr6owJ+iQh+CMmYhV+HgsM2N4KeBK2ItRiFEfN9qE1Y2deXw0QAQeQJWW5NmAzYBcCQjpFjV/45hIMtaQkG+1AIFyuRCAFOK4PWt4MuO3VCFWM4riWENxgTfYeVUq8XVKWOzdaxibgUaBoREGHVG7jPr9n/goOuDXbLV1n/+3ToXPSzLihfoce9FobgWyg0Zw4uNE62ncEeDxsvhI4W3OwFQBtRs6ETcC82OoZOpM7zwcP7KtI2mG/Y+QE+rXSgMeeYgRN24EngF8sSb511tG+bTBCWfqMnAnf/3XutjeSwcK4+hDUDg1odQuLglXAqyNFzUlz4mC5ZZR/O0osibGcBkwE7gCYlEFOXAdSNfnvpuRKU2hFnL+1jrQuV8DtyALVGlV8AXiHV4Ap8zHzBzxwYaDbRoW+bek05o+I+/6Y+My2jOCVGtEJWAAjykFQgOJI2MHsRdb1KOyxCJoFS/0OqlMy8T5wBSgabjTIDGliURznXiDxPhEGLUpBzGzv6ZYp6y5ZOlDsAG4COtCnFJ8V7M2s1f28+5DT7QJ6hikCvgPyAaTE5R8UJ11dpvH+gMy/tN2zJihvfXy3Petocrqa5uvjdtvVU2fG7Jw7J71w9FIVUvEcdADXh7Wy+3TBZAHXhODE3y5Tt9cnFylBaqBX//pWs/up1CzTp3NesGUJSZsymCQES3+t9h/QzeasMTmOlYauxkbXDqioLHVuHabIJLnZ3a+91H7Zkjbgk6sVZOhe4ytXY/8kPaAc2QsseUaI8lCQKiNERUjnyfnLEp7ruejP6v3T96WQ9+kIU/l5pK8AyNfnNumuLu0yiskIQrrX2N9Z15OGJvITkmStLVE+UMiQzpI5JQmt9875nndfHawBesPRv19Z6uyKbloawNlvrt6Zt3xq52CXPuD6qW+6NMtnjZC6N6vIejd5vJYNmGOdOFLk9NuXQk19l4fyTXat2ZpsOlFZ6tweDQ4gI6nsXHaq2tXUv0NoYiaAJUF0pE4xjVdxJAwgJGm5S23p0ix6u3/3HjZ0FVdVsrLUOcyX7tPbgGxlUJU6xeS2JYqpD201CjlqrGTWs9blV34L1HzySr2KjZ7YU1pSlkvkFtx3oTDD129sCPfl9DBNRljjTqBqbV5TA8D+jkKOvOceto0e/wCDOiDCodRiJwAAAABJRU5ErkJggg==";
        case ArtifactTypes.ASYNCAPI:
            return "data:image/png;base64,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";
        case ArtifactTypes.GRAPHQL:
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9bS6VUOthBRDBCdbIgKuIoVSyChdJWaNXB5NIvaNKQpLg4Cq4FBz8Wqw4uzro6uAqC4AeIi6uToouU+L+k0CLGg+N+vLv3uHsHeJtVphg9E4Cimno6ERdy+VUh8IoghhHGCPwiM7RkZjEL1/F1Dw9f72I8y/3cn6NPLhgM8AjEc0zTTeIN4plNU+O8TxxhZVEmPice1+mCxI9clxx+41yy2cszI3o2PU8cIRZKXSx1MSvrCvE0cVRWVMr35hyWOW9xVqp11r4nf2GooK5kuE5zCAksIYkUBEioo4IqTMRoVUkxkKb9uIt/0PanyCWRqwJGjgXUoEC0/eB/8Ltbozg16SSF4oD/xbI+RoHALtBqWNb3sWW1TgDfM3Cldvy1JjD7SXqjo0WPgPA2cHHd0aQ94HIHGHjSRF20JR9Nb7EIvJ/RN+WB/lsguOb01t7H6QOQpa6Wb4CDQ2CsRNnrLu/u7e7t3zPt/n4Acxdyp2vAeFAAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjCh8PIzcThgm3AAADEElEQVRIx63WXWjVdRgH8M//HMuVbNnQFhQ7WmksQnqxrnqBIjXaRWJ01eqqPDlMNKTSYe9TLHtvHV9KQhIkK6uTFIIX0kWFtBghVmg7SpYK4hyrtjzn18V+rv+Wa2fQA3/4/Z/n/3yf3/P+T1RB3dZLhKuwKrKeCSr7plk0pu4EVVHIoojpkXFjIjMD5bE0M9XAZySTUuDieVI1ukkVobker+I6nBdFf6ATS7Iyey/10NghKikMWTym11S1DYR2zMWT8cZfIOBOvI0dZZVdJYUVJL/GcKpITLfwnxCVbMrgBRwJFKeqXYnvcRxN8Q49eIJkBU4iG2W/oYvQRijiSEZY2219ZihEJYW78VHKs/1o3uWDA3dYUBff78rJd8bvr8FONHV4t2eRBy6LRdCUwpifk99xJskNI0K3Lyd/YI57xdIsBqEzJf8uAq5qdZ+c/MF4iTRdlK6i9/FTPP8ekyooz8T9aJvm4SHNnDysREuQvTKyX4m6Itb2IQM5+ROJMAuHcPNTinu6dcA6rLnJ48dGVsdsy49jNdb9YqOnFffgFhxKhFk5+RPD+iAIf6I/4dRmRYnMXMxMeOOwk/8qv+N6ZSRv4orTyvPeUZQMFkJ/xBq90UremoCXsexjXw+MVuNbfTmAZXjpkMI54+jkpBWlGuGzxTaP2kSP2WKCv3aiO9BalYHAFKzA0oZUYkejSyyGpYM9YsqoBhLZGkzEc9h6Wnm/KqlW/w94L/D8IEa2ZpiBkkJ9ELrQiNux+/Kze3xWqrcEduO2QYzQVVKoT8+iBZiR0nmtpNBifHRD6jwD92DDGQNHR3x8IfbiQJXgDbh1BO9oyoPMp1TWogXf4issxya0v67Y+6LiMO3JJuuy5tzAI1gYczcP12JLReaTYfvgsIIKEkGfAeebeDHaMQdthG0k8+O4/jDyV+NzPLvIxp4ODyKRoDGO6/9cOAdtkFWZHWfT1aiLomP4Bo8m/Ng4OJvGv9FSy6gu7oM0XZCTP/W/7GRCH34e5hx91e3zauAH/x6asS0+zQNOl6vR/Rtm6++43BL7tQAAAABJRU5ErkJggg==";
        case ArtifactTypes.KCONNECT:
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TS4u0dLCDiEOG6mRBVMRRqlgEC6Wt0KqDyaVf0MSQpLg4Cq4FBz8Wqw4uzro6uAqC4AeIk6OToouU+L+k0CLGg+N+vLv3uHsHCK06U82+cUDVLCObSoqF4ooYfEUAIUQRQUhipp7OLeThOb7u4ePrXYJneZ/7c0SUkskAn0g8y3TDIl4nnt60dM77xDFWlRTic+Ixgy5I/Mh12eU3zhWHBZ4ZM/LZOeIYsVjpYbmHWdVQiaeI44qqUb5QcFnhvMVZrTdY5578heGStpzjOs1hpLCINDIQIaOBGuqwkKBVI8VElvaTHv4hx58hl0yuGhg55rEBFZLjB/+D392a5ckJNymcBAIvtv0xAgR3gXbTtr+Pbbt9AvifgSut699oATOfpDe7WvwIiG4DF9ddTd4DLneAwSddMiRH8tMUymXg/Yy+qQgM3AL9q25vnX2cPgB56mrpBjg4BEYrlL3m8e5Qb2//nun09wMEy3J7F6axMQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+QFCA8bAgAxuSAAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAB00lEQVRIx83VzYtPYRQH8A9TQyMWs/EWGm9bkYUFsfAPaGThJSs2UpLslJSS1VgokvKSWZCSEsPMQikhmvKSBYtREo0wg2EGY/O99TQZzc1v4bu593yf+5xz7jnn+zz8HTvRgy5s1mAcwSg+42ve9zfK+Qz8wD20YDqe4BMm13E03seL0YTuZD+IOwk8pU6ASePwTXiHIWzHNJxDf4LDXOzBLDxHB77UCd6Ob6l91Yu1WZuPt+F/5vkQU+v2YhFe4W4yrtARp+2xD8feNtEeVKjKNIDhgl+Wv7scu7PgJ4ytcVyVaBgHsQYvwu1LuU7H3jhR5+uyoS+N3IFHRbA+vCzsUdysM8I38B1tBdeC1/hQaGM3TmJLXX08w4M/8KeS7T8LbSDZjx275RFdhSXpyey647krmV7BwojpRFHvizhb2CPYW1fh58c0cRS3cSCKHcXVDEBv7FV1/2Q93uQo2FSU9Fp0UJ1LKxPgUF2hdeM9nqYsv8IPohlzYi8o+AmjLdNUlec+5mVtdYL143rU/hEz6wTojRaO4lgc9hTrG/C46M2KOs6XZuPxgusM19wIHQwVN1uF1gT41ahrs6sYxVt5v9DIS78Vl3KhjOBMzqD/C78BXvOKVB7/ZiYAAAAASUVORK5CYII=";
        case ArtifactTypes.WSDL:
        case ArtifactTypes.XSD:
        case ArtifactTypes.XML:
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9Ta0UqDu0g6pChOlkQFXGUKhbBQmkrtOpgcumH0KQhSXFxFFwLDn4sVh1cnHV1cBUEwQ8QJ0cnRRcp8X9JoUWMB8f9eHfvcfcOEBoVpppd44CqWUY6ERdz+RUx+IoAuhHGEAISM/VkZiELz/F1Dx9f72I8y/vcn6NPKZgM8InEs0w3LOJ14ulNS+e8TxxhZUkhPiceM+iCxI9cl11+41xyWOCZESObniOOEIulDpY7mJUNlXiKOKqoGuULOZcVzluc1UqNte7JXxgqaMsZrtMcRgKLSCIFETJq2EAFFmK0aqSYSNN+3MM/6PhT5JLJtQFGjnlUoUJy/OB/8Ltbszg54SaF4kDgxbY/RoDgLtCs2/b3sW03TwD/M3Cltf3VBjDzSXq9rUWPgP5t4OK6rcl7wOUOMPCkS4bkSH6aQrEIvJ/RN+WB8C3Qu+r21trH6QOQpa6WboCDQ2C0RNlrHu/u6ezt3zOt/n4AJURyiESMmtkAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfkBQYTIQw3w2d5AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAxFJREFUSMftlU1o3FUUxX/3/Wcmk6SkyYgkqUoXfiA24sxYkGI7SdqFiFgQBC0RKogKblIq6sKFUlxIqaYoRaVuhLaCBRcKdiMy1VJB6gyE0o01sZS2IcZkMkmYz/eOi5kIIiSmdNm7fO/e9+45593z4HasE3YzRfOjDxB8V0cyWH3TuaLWynUbPXz5qR0Qur8IUGlEnJnJpdfMj230gspS5S6MMYF5JClwSxHEzPYFEQFE2MnBnyY3rsGxewd5/u7+pDN7McIKPfnCLwCzuTTOrOildGS2EjNGDIab0vGmhXJ/fnJtBB/fN0hpJNs5ds/AuLDf60GfNKXx1f242bYgpdudfSPYWw06Imw6QfR2aTizeW73I//VoLJnO40QuiS92pDe9NLAKjwzCgDXd6YRvKD2emScALodyEspL96LzA5GwR1dGsl8VJ1n8c7JIu7GrjQ1H/bXg6aqQR96acCBYmbfJp17/EbdfwDgLbgA+wCc2exyM3zfmy+e7nDu0bjZV87wXkrVgw7VxHQ8xVtXdwyZ81KsKR31Un+bhjMJ5x5ONit7e/KF8w+db/Ha7aKdQdraRnbaJeJ1gJ58oXhhsflch7kH42YnALzU1wh6vysRSzlP8AZXVjnzaI+X3vDxzm0ru7MAXM9lEIyt0mNwassPF1pDN5zhsd7YoJdeDvD0P+KazUtU3aVyRTFjNGF2KDIrBZFoSPtrQZM1r6+XR7P3gzoEz7YLp0pV+xmgPJrtNeOzhjRVb2m32RnVuNmxyEg7La7Enpy8DLCwkMu+E5kmnNmBAONe6g3SMyEw12n2XUNKtZ/dqd+WFgTgg16rS6/QEr0SYceBwx6upfLFf09y348FgNKfucy7zjSRcDbuxYEI6qFNj2vRc/KJS9OtITJKEbYSwafOONIUM3ecLf4/s5sbzhIUug26Ma4EkYzMfq17v33LuZbwU7uGXJ+Lb/rjr9ly5uK1m3PT0kjmpVrQ5wAJs4N9Z4sTG7KW9RKCGHIGEVb26MuNete6ZifpdcQQsPXw5aszt7/QWx5/A8y+bJFN313BAAAAAElFTkSuQmCC";
    }
    return "";
};


/**
 * Properties
 */
export type StyledIconProps = {
    title: string;
    children: any;
    type: string;
    isShowIcon: boolean;
    isShowLabel: boolean;
}


const StyledIcon = styled.div.attrs((props: StyledIconProps) => ({
    type: props.type,
    isShowIcon: props.isShowIcon || true,
    isShowLabel: props.isShowLabel || true
}))`
    display: inline-block;
    width: ${props => props.isShowLabel ? "auto" : "24px"};
    height: 24px;
    line-height: 24px;
    text-indent: ${props => props.isShowIcon ? "32px" : "0px"};
    background-repeat: no-repeat;
    background-image: url("${props => icon(props.type)}");
`;


/**
 * Properties
 */
export type ArtifactTypeIconProps = {
    type: string;
    isShowIcon?: boolean; // defaults to true
    isShowLabel?: boolean; // defaults to false
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ArtifactTypeIcon: FunctionComponent<ArtifactTypeIconProps> = ({ type, isShowIcon, isShowLabel }: ArtifactTypeIconProps) => {
    const getTitle = (): string => {
        let title: string = type;
        switch (type) {
            case ArtifactTypes.AVRO:
                title = "Avro Schema";
                break;
            case ArtifactTypes.PROTOBUF:
                title = "Protobuf Schema";
                break;
            case ArtifactTypes.JSON:
                title = "JSON Schema";
                break;
            case ArtifactTypes.OPENAPI:
                title = "OpenAPI Definition";
                break;
            case ArtifactTypes.ASYNCAPI:
                title = "AsyncAPI Definition";
                break;
            case ArtifactTypes.GRAPHQL:
                title = "GraphQL Definition";
                break;
            case ArtifactTypes.KCONNECT:
                title = "Kafka Connect Schema";
                break;
            case ArtifactTypes.WSDL:
                title = "WSDL";
                break;
            case ArtifactTypes.XSD:
                title = "XML Schema";
                break;
            case ArtifactTypes.XML:
                title = "XML";
                break;
        }
        return title;
    };

    const getLabel = (): string => {
        let title: string = type;
        switch (type) {
            case ArtifactTypes.AVRO:
                title = "Avro";
                break;
            case ArtifactTypes.PROTOBUF:
                title = "Protobuf";
                break;
            case ArtifactTypes.JSON:
                title = "JSON schema";
                break;
            case ArtifactTypes.OPENAPI:
                title = "OpenAPI";
                break;
            case ArtifactTypes.ASYNCAPI:
                title = "AsyncAPI";
                break;
            case ArtifactTypes.GRAPHQL:
                title = "GraphQL";
                break;
            case ArtifactTypes.KCONNECT:
                title = "Kafka Connect";
                break;
            case ArtifactTypes.WSDL:
                title = "WSDL";
                break;
            case ArtifactTypes.XSD:
                title = "XML Schema";
                break;
            case ArtifactTypes.XML:
                title = "XML";
                break;
        }
        return title;
    };

    const renderLabel = (): React.ReactNode | undefined => {
        if (isShowLabel) {
            return (
                <span>{getLabel()}</span>
            );
        } else {
            return undefined;
        }
    };

    return (
        <StyledIcon type={type} isShowLabel={isShowLabel||true} isShowIcon={isShowIcon||true} title={getTitle()} children={renderLabel()}  />
    );
};

//
// export const ArtifactTypeIcon = styled(UnstyledArtifactTypeIcon)`
//     display: inline-block;
//     width: ${props => props.isShowLabel ? "auto" : "24px"};
//     height: 24px;
//     line-height: 24px;
//     text-indent: ${props => props.isShowIcon ? "32px" : "0px"};
//     background-repeat: no-repeat;
//     background-image: url(${props => icon(props.type)});
// `;
