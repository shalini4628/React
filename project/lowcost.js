// import React from 'react';
// import './lowcost.css'
// import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

// const LowCostRooms = () => {
//     // Mock data for low-cost rooms
//     const lowCostRooms = [
//         {
//             id: 1,
//             name: 'Budget Inn',
//             type: 'Standard Room',
//             price: '$50/night',
//             discount: '10% off',
//             location: 'New York City, NY',
//             imageUrl: 'data:image/jpeg;base64,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', // Replace with actual image URL
           
//         },
//         {
//             id: 2,
//             name: 'Economy Hotel',
//             type: 'Single Room',
//             price: '$40/night',
//             discount: '15% off',
//             location: 'Los Angeles, CA',
//             imageUrl: 'https://www.magictrips.in/uploaded_files/category_images/Economy-Hotels06_01_43.jpg', // Replace with actual image URL
//         },
//         {
//             id: 3,
//             name: 'Hostel Stay',
//             type: 'Shared Dormitory',
//             price: '$30/night',
//             discount: '5% off',
//             location: 'Austin, TX',
//             // imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAECBwj/xABJEAACAQMDAgMFBAcECAMJAAABAgMABBEFEiEGMRNBURQiYXGBMpGhsQcVI0LB0eEkUmLwFjM0coKSsvFTc9MlJkNjZIOiwsP/xAAaAQACAwEBAAAAAAAAAAAAAAACAwEEBQAG/8QAKREAAwACAgICAgEEAwEAAAAAAAECAxESIQQxE0EiUTIUI2FxQoHRM//aAAwDAQACEQMRAD8AZzXnHWOqT2nUN3EbK2urdUj4dcOuVBOGHP0r0K3mW5tUmQEK/YGvOuqNr9S6lxkAx8H/AMtae+0AgTF1fJNH4F2IriHPEV0m4D4A9/xqUNol4OEuLBj2MbCWP7jyKFmyglhVmgwWz768GqT6aySD2WUjjPJxStNB7GaPRZmhn9hntr4uoCrC21/+U16BpNrFZWaW8RJkC5dkbDE/FT91eOQXGqWUiSjkowKv/dI7HNeh9K9ST6vdpp13bsJxGWEku0q2MZOQAR+NSmQxtjJDAIVz349w/d2NamsLC9kBvLWMy/8Aibdkn3+dC06g0w7lN7F7jmN0YhwrDyIPIqee7Pg/2Zw4IyBvLIR8PMV1dLZy7DerdE2E+jNc2TgShOM/570h2G3TtN1m0mfM0gIjRz9v4Uwxatq6QhIrbxARzHuGSPiKW9RuZpnYSaXDtyfdaH+IGR99Vpuk9k6B/Tl+uh6jFdXSl1cEFByyjOMn51ydLLtK1oRdwPuZhEewPqp5B/lW44beVik0MtuD+9kSL/MVPFpd1Dme0cSIBkNEwyPX60v8d8td/sdHJrj9HCWsjQLPEMInf1HqPyNWtBh3LeM3vD7C59e/8Ks6TIJBNHIu1ip4/wAQB/Mc/So+jwt1Z3KbiGSfcvryBx+I/Gs7NktRSZdxyuSaNxhp7iR2jJiALSOw7H0FCdUf2i8dtzBQ2wk+uex+PrTNfwmxt4kRhAqN4jeZf50La0tpGN2waWSRizEnHfk5+OTReNmlLk/Z2XG319A3R1Ft1BaEurKsi42jJqBRpPt8ni4uHEjh9re6Mk/eaJ6SLcdQWiIQD4mSqr2+tKUOk3txqd29pvbEkjHwz25PfyrYiqqE9Ge5U1pDDdRvp/T1xJpkqzoJ43w658Me9ztP2e/f41x0xqVxfXcUUJHiysNyTHg/H+o5qxocEd9pHg3EfhSLcqGf7e5dr5xx7o7E/Kjcei6dFLaTxzxCW3YGMrJuDc+eP4UvJmxzXG32NjHdLcoUrea0lFybQFYy/Ck5HbkUQ1BtNbW7kPG7zrtVmDbSnujkUOt7EWqXMLMsjI/2lIPJHfir+paXbNrVzdG7Edw0gC8btuAByO3l51Yf8EJlfl2Wp766g1VIsgwzBWSYHtnsHx58eeaqrcWTveN4ISGN38XzDYHJX4Hmm0C0t7f2i8hTxrllSO4zuWUnd7v+E8Hik8S2CPfmJZPBjkfer8nODuxzyPnSfHyK6fQ3LLmUyylxCbISaarQKZPcUDIYnAwPQ9u1NekXP7GZVu0nkSPdNHyGVgMnPy86ULbwjpAk0rfGivnAOTP64AHcenatz3Fyou0QPDIkqRmUHDOuBnP0OPlRJN9S+yG9d0uj0mwmN1DHNGhVWGOfhx/Crxod0+X/AFPb7zk+/wA5/wARohmtrFPGezLyVtmq1WGspqFGqyt1hNQSc1lYTWqk4XbPqnTZreMA+GS7IEUZ5zjy9e9JPUN1F/pHqBO472UAdjkIoI++g2kajJp2oCdQjGMnYHPu58uf41zqMgkke7lchnbIweMnv38uK888rc6Zp8ey7Y3S28q+GgEkfYP7ysMVLqP7VorlrNYkfKjwlyMjFBBMpOSxGB7pHrUsU8iKjytI20e7xtxnzxSpyXKZOkXd9uUEJDZcAuPSmPovwx1LG5IGIpMfLIxQAzwG4VLjLqxAR8Dd/KiDRLBKRZmRLiWMhTE28HPnzyKCfJcV+R3Eiv8Apq21S6uriz1WKK6WVxIjKQo58mHzpsurK8j0AtYGM3ax7VVWG0n4GlSx0DVbW0lWTKF3y2TwwwB+Y86e/CktP0dyzRZWWKIHIGSDgedNnNjyb4vZ3aFTTta6oEjWt1pU9w6pkMIw20ds5HzorZNJqdrI41G4VoseIrQEeGfkSG/ClK417WpbtI2mePbkh4zhj6Vei6r1qBxZXyRX3iRjcrryfQZFFtN9+iOIzQ6ZM4J8e3mXH2tvP18/vFWrSG3gYHfFG3nyGVvgccil57qxitlEzz6e7neYnnEoOfmc4PzFW0exksd0QtT4g2H2dtz59BnsflnvVdtctJf+DU9L2GrxbeNWeIK0nBxx5cjkenNCOmLVbd7mWMD3J2YISQGbGEHHoHYn/hrqa8kOiXn6tiUSWxWJo252nPKsPX5etB+kpLuXWYrWQsIY45GUtkhC3J4Hyxz2+GKRkx1e+Rbxv1SGmf22a4e0S3dmbBe4ZQVPyqlf6ZdSCRZLhVGeIhgAY+6jc8Mc0qkTSK6H3RvwG+o4NCNaQxlpGRoy3KMGx9c9qrfFca10Mdy332AUt5tP1OO5EBmaMgkIcbjQpru9SVyH2IHZgkKhQuTny8+fSmbT7CS7dp4b2DZE6htzAPyO4HmM0D8KwivnW4uD4uHVljTOCSOeSO2PL1rTw1kqfyooWpVdIa+g7lp5lmlEPvtjfxljsf7WPke/OSKEWWhXWm9RQ3MBzBJNmWMjOMt6c4+lGf0e6LDLcNBDeIymXxQ0L+8CEbBI4I7+lV31S/XqgaZe++rSsqToNrcHz9fnSKVz5Lcre0tjo4vH+TETSbeaG2cO537sk5zu4pg1fSZHv/a7YqsjSOWQjiXkYB+goJY313cwS3N0ilnfLqq7cfSutXe4TXrxmc48bhM52/I+laNacorJ6bGW86lkmuIdDj0+JIoJFKoFOZDzg58jyaDxSWca3rIZHijeRnG33lI+0B6+fPnUf60hlnhlvcuVXCBQA24HI+dc2bxw29zPIdwy8jIo5B5JHPnXYdI63sN6I0g0ea60q2/YRtzuwVkJ4weBg9zwPLmqGqTtMt4l0EVY7lFVj3wCCM+tZaqJtKD6ajwxLLuJaTKueMhvMcedWILoWc922pRvJAsgSBAAxBYAKcnuMnvQwnLda2TVJpIf+nxjRrYA5Hv9+/2jRDBof09t/U1sU+wd+3/nbNECa3J/ijLpdszBrk1smuSaIEw1qtNnbx3ofd6pDYki/Iii7LIOcn0NQ2ktslJstS3UMMiJI+DI21Tjgn0zWpbiOI/tHApD6p6h8aLwrb9ntkVtxPPBBBxS/e9QXeoTvIXkwDhQpwT6njy9KrV5SltDVh62wJKkETh45RJv97aP3fgT61qUkEySBm29gF4+NNXVug+zWwuopUaI8Kuckj4ClWSEIjOytjOCc9zisRtJ6Zp8draK+/CnDckAY9KvW1zmMQSGMIyrIoJxtb/OaiSxPgG48F9gO1m/un4+lRXKKIoSMNuTj44NT1SF+mXYbyN7homYiLJyQM8jsaKae11JarKsihEkK5H28EE80rbthDduD2PeilpqzWNt4fgqySr7wb15ApdYlRyehie5uRNJG+oOkwYhS4ISQ+lPEF3bSfo8vkkuUa6EYMkG4b0+z5d8Zzz2rypnMpJlldg2D7nfjtXplhY203REV6kKLceEqltoyVIWlTjlekgm0xDvfC9rjcEECFj+IqvdavarMLm2QNK8eEZxjbjvVrWV8O4UZJHgt+YpUfabW3LE5OQBinxCpJglxV8ZjLNL4jZzvY+fwpi6WnuoNRVbVVJdsY7jO0f1pShkiVgBKUbONu2mzpNkGuWqIxYIQpb1OBT/AK4oH7CGtdTrb3lzpklp7zTbGdeBIRzn51V6flt7O6LzzXUTyyBg8bjBAGMNQ3qdlHWE3OMXfcj4CrZCOSGlxtkIBxgGl1KdaHTTUjPZPfvcvJDqMM7R8xI7iN3HOAQe/lVy51WC3njhuzxIA23zx60rxN+3gEhDFZFYefIPFF+ub46cunxTadHM1zaLIkp4Zc96XMP3vsh3PrXQRutFsr+PxtPmVOP3TlT93aq1rA0l0NO12zS4RgfCkYA/VX7/AI0H029tLK7ju5LeTxnAYtDJjIIGMr50w2mrRXdvcvaTSXMsKlzCU2yEemfP76sTMfy1pinVBKwsjoSl9CaFLlTlRdZIHDDlu4+15jypeWfWU1USatpYfLllmjIwSfRgcH5d/hRG0120Sw9svo2s1VwjeOhXYx8quS9S2FtgmXeknbYdwYD1HnR1M+yVTR52JLYwzNAAIi2I2J+0MdqqXMc0d5KJQ7LGSqu+MkeWfjTF1DqWizzxpFbLANysJoG93bnnKds0uStvlON8zZbAI5Iz6fKq95X6ROkVoCUuBM+73D7oI9Ks21xIXkCgtEzlmJ7nNajMbBVljC4bljwcdiKvJDEHlEMZSNOwV+SDjz+tTOTXZ3EsvDa3WnxvbpHbqkxZcSDYzcbgQSPKtagk8cUxPMXtaGJSeNhbjHw71V1CePZFb2MAAjcuuccnz445+dSozOJWB8MSTiU5GQATnHwpsZU2Q0z1Hp9s6Na4BHDcHy940QoV07eQTadbRq+ZNrHAOccnv6d6KHyrcl7Rm0uzDWjWfM1BeSNFA7oMuFJA9aJ9dkJbZu5uYbaIyTPsQDJJ8qXOrNS0+CKSG6RZZPCDxjuOSaX9UnvmRnmlcxt3yePpS3cOsjhi2SBt3Z8hWbm8xtcZRcx+Prtla9uZWRJnkZmRwBjvjnjNdWcbMTJI2xGGB7pOT8AOfrRDVV1FdFEs1qDbAqEnCbSDnz+lc6Fpl/qUStZWxIAP7bcBnBHHf/OKqafLrsfpNBvVo2u0eWaRyB3Zj2HwHpQiSO4vrad7W3IhWUlpCnJLcgfn/k16L1HpNlZ6dBEIt2+TLlu7YFWOmNPjs9MkgABAl3OSO5KqT+dYrzf21T9musKd6Xo8entLhnFrFE5kkbaE5Az8fWobu1EVnAzZAjkeI+oOc16vNpcUU2m3XhglpWZmI9VJH5flXn90o8C+R4DJ/asoN2MZzzVvFl5FTLi4e2AktllYo2Dn7Lepri88XMEJXcERCeP8OcUQlaFLmJLeIRoSN2ZN23PnmpbwR22sFJCHjkiBDfTGePlTlT1sRwKGn3aKUWU+4TkBgP416xokpPQsiqCIxt2jH+7XjlyipIx/dDYGe/2Qf4167oIx+j8EdtinH/LUVH2L1p6EnWpD4sZJ/wDgv/1Cl72T9hBEXKyBdyn8aM65uW5VTjiJh+IqnJGXjQL9tVUg/HFNxrSJKrwzLtLBWHABxk0b6K97W4G2FF38xn145qJY0MEjNnIHFWuiJhPrlucc7u/ywKNM6p0ij1UpPV1zgD/a/P6Vcv43juZ42UKPFwAMYyc9q46lT/3ovG25xeMPwFSarCs+tRQYY+LcxoFxj7WcgjzpLvV7GzH4GacWF5EJcA74wAfi9N/6U418DQZsZ22argeuKRpz7P1GkAQRqJ4gEUnA97yySfxp3/SSj3g0G2j5JtV4+lT8icqhbx6ycBYmnjkKeKmNkaIpB9Fqbp2R1fW5Ld2jdbCVldTypzwRQe+l8CeJHZWBAPunOOOx+NEOkpvGh173cY0x8fUk06LTkG8bmtEOjalqBJlfUboyM4Xhgc+6x7HjggeVFmvpLtruFoIxKsMeJ4hgrycnHbypT0ku0O0HjcSfex2Apg0iczx3wjba6xIj+jDfgA/InNV6dcw0kgLqcEtpLhZHlB90nON3zxXWkSSxXntAVy8b84bgDPI9c1cvY5pYpbgDCowAyCc5qu26GPx3J27thWgWmuwuOnss6tZH2ovFMJmZt+7HkfLB+tRI3siEbU94jcufIc/mBRmS1Ma2xH7N3Qpjd3JPunPlxn7qF3llOsCyBD4nm3lwefrXKWvZNdoFiSSW5mZcb/WrjSKUUhsuMYaora3GSzNu3Hnb6ValjR42hAMZJ747fCj5JETDYS03Xb+1tTbWTrArZZnA75J/qPpTND1W1rpDTTKJZFYRpluWYgnn7qVrfTmj2OskTL4YJLcDOT/H86nu7LT5GBE7K65b+zndzjA71E+dcP2N/o1S9DdH1jp5uYYyQFaPMjkfZbIG0D6/hS7qfVktxJdq0SiG1kZ4mYkeJjgD6/kaAy2z28hMQMgxxJ/H4Vq7k8aLxZCSqYZsqGzj8/r61Znzrv2IfiTP+y1LJJK/iXDbQ+dgHO0HyA8vSs0mCzuLuW1FuxY4Cuyk7DjnPw/nRLS9IuTbpNa27SF1A3tyFHmeec1XvLeTRkuZYmXc02xnJySdv86HG60nSJuUuky9q+mRWdnJbyyzXPtELKiuxbYFxnGfs98/PAqpp11Dptulpp7Heo3O4PfPcffQMXd/eXaS3Ej7mAVgOFwP61gvLy1vJ2smjUscEsoJ4+YptZVVbXQtQ0uz2Dq0Bra3AB+0f+k1OhEceoAcESEAf/bWtdVe7HZ7uzXCp9/FWLpVMbbFGZHGeO/+cV49eR/bVM3I0wL1FmDSY3UD9k8bDnsMhT+BNKqW8VtrckBwclX259V/mTR3Wtcs2vZdHurKdnaItujQnt2OKWH1pNVntryK2kt9hMT7slWxjHPw9/7q1fDyclrXsR5LWwNrFnH7bAqDaAwST05Yjn6CtXlg90bCSwi/ZgMNzHsoyFyaIdUWi276orSbysMEileRli2efLtRrREt3tog0kQxECImbnGAAfwqy8yWPkivOLeTTFhenNNuUJutUkhmZskC33qOAP4U9JYxp+j+Wyhv4gixBBdTAxpkY5PcjtQHWttla3F1Cit4SFgvlRu8Jb9Hl4T3MOSAuB5HsaZgy3kXYvyMMw+hHtul5Zb8G+6g0toNrEPFI8vlwPsj86tDpC92r7Jq+kTkd8XLKT6fun86Up4QriTaAGK8gfEV00+6LdE7Bdw+y5HnVpJsrNa6GVukupFODZxyITgtDcxsPzz+FWejNE1PTNctjqNhNACWwXX3e/rS/H7YlgbqGedQJdvGSMfOjnRWs6lP1HZ2kl5LLBIWLIxB5HauTT9EbBvVGoxRdSajbmNjILxzwOOVwPPnmrPVq+z6lJLJ48YDQyFnGGUYHIwOPhVnqTqLULPXL8xJbGGC4ZdxtlLLznk1e6jvjZ9QPe21pFO72SvIk67lbIBJ9M8Um0lY+bbn/Qoi5guNbtpLd2kTxYhubOcg/GvR+p7mSHVNBaLwTKLUY8VcgZU0pR9Waa22e66c04uhVgU91j6EUX/SFLorXenHUV1FX9kQr7NIuNpzwQec/GirHueKF/K3fNivqYM11GAuZDEhIHYnaKu9II0Vp1BuGG/Vh+/LVNdWvSUbxTGfVbR3XxBsZZMA44PBPH8av6Ja6TJpuv8A6p1ZpXNkY3N1EYxEDk7icfwrsUKZJy5Odb0JMBf2dQmf9Zjg8c/9qPdOxltN14KChS2jOc+sqiq9roYktSkev6F43iZ2e0N2+e350waXo2oWuk65JF7JeM9vEI0s5xLuKygkccj7qNrS6BVdhe50aKCNVJMibsKPF3jODjgjPlQLWbS3eQwhgCswcFU2kdxjJ4bseBzxRzS9duL0iHV9IktpNwdJGPG3BBHzzVbVLixurpI5GJMMoLE/u4ZzjPbzrFxvPi0siNiviytuSKeCZ7YFIzJ4SbsKACAAeTk8VbvdQ0VdOit9S06cXDMwe4imXzPbGQK3rMxt9HvmhkWNZoXRjt3bwVJx8zjv8KRrxwul2qlNylUIA8u/8quS7qltlXJE8GPcul6UNKXUbO7Zrnds8IRfYX1z2zikia8uJXnmWNmjjYgkp2+Z9aftChgl0C5hEkviMHZjnKjCk8AfzoHqtqv+il+VKIz3SrnGCee/HH5VWjN/epNfYycPHGm2CkurPCQzmaJdviKw47gEDPcd/Q1a0uwthfhrW5W4hEZdpIpM7T2wR68j7+1bvbSD9YaXbugKy2+7JYHB3N/Kh+iukGo6Xc+HGpa8wxk4C7cc/wCfWruPhaSFZOU9/ouX2/Mu0kBC25Cc5UAZOR+Nd23tUujPbw2I2yHEk5QZAPcZPl8vxole6nBjVrFLRneZP2k20+4G5IPp8vLNDLTXr6cexSbfZ02xkKmAFHZs+RqxOPHjW0Iu7t6PQunLQQ6VbgTSvEyDAkPb5UPvbZZdJ1hvZkmlju5fCjYZBPAHFVOluqXlWKz1NRHKBtAKlTgD90YwfvqeHUIltLiVrhtr3Mz+EUHvgvweefKtF3PxrX6ZSmX8j3+0Br3RLm3tLS6aAbEiUyZwNrE4x5fjSpqiSwussilY5S3hNs+0AcGnHXNbbW7S3bT1kFqJysmRgOccZHlz29fupd1W2v2uEgBuZI4w3ho0OGj55Hb1qlTx71JZ/Nrkz0DWtbW+SyDSRsy3SN7vPGDTHpcsdy0XiMMRR+I5x5kkAfcCfurykGVwyNKMhshtxyKaumNVls7R7a8lSRSSyuuQxJ5O71/DjFee8vwuGPS+jTjIrWpPTf1baXEas0aZHKvtG4fLIpA6isLOT9b6UYFSaGVZLadgMqrAb+e/mR/xrTbcazA9shjm2hWXdx3HmK8w6t6kMWpXLafHdRz5Ro3dQsZ90K4I7kHCn5qK7wo3pyvRWpVO+YF6ttr4Q3F7LeQvCsKK0cRwSAcAEfPNBNUllgntUifHh2secHse/wDGjN07zXtyuI2s54kEsZGSSMHg+lL98b+TUZZpLeNucKQvAUcDt8K2vjSTWirVb7DMsd9PpdxO8mbee3XIZ844wcU1y3Bf9Gd65zkQEc+fApHN7LJpr2ZQom3DKqnHxpjsdSa/6H1fT0hbxY4MjHZt3GAPpUYppewsjTEC6vFaGIJ8z99VbWXEbRt/eyKIfq+Jg8CyETQYM8rfYQHOfu458+1GdE0jQryGK5nLQwo58QSykGROVB+/B/CrC/ES3t7JYYzP0rlOJPDZwPrn8qg/R3IX6q0/J52PmmX/AEW0WSMyxXsos2G0xCUYY577v4Vrp3RtI0/qWz/Vs/iTysxyZMhEGUP/AOSmlYp4b/yRoUur3uDretKu3wWumDZPJOV/pTNqUq3t7p8jYkD2cQ7/AA/pS/1BZq/XupW96ri39pcyEenHnRPUZLSe8is7a6eNIIRCsowSuB5+vbvUZFtrQ2XqWmIjRsrsgx3xgnj5U9/pThaTWtIjD4Wa0jjADcj3vMfWrk/QmjxXEFvLPcGeZd4PiDlcZ3duxpm1fpey1nVIbq9adXt4VjiaNwBgZIPY80zfQvR5z1nDtt7ZwPsTMmfmq/yrvov3enuqz/8ARL/+9Nr9CwXMzxX2ozy2y4lAzhs4wOe3bHlVPp/Q7exn6p052l9i8GNRKOSUIbtgc96HEuM6ZGhKv7JIdA0+5CjfIW3t5nPI/Kmf9G8wtdM1iYYQExqM+fIq0/TFqYYLS/1o+woGMeQAwwcfgD+NT6VHoltpV3HbX4ilkwcEge8ucEDjuPxNA98HO+wkhw6v060sLW1ktTIXMobPljHevP7q0UmGRpXjN4VlzJz3ZuF+H9aaNX1WC9srOwt7m1LwqFWfI3PhQMn40MurW0VYWOrRuIII440AABVSOO/HJJ+pqjgw5plTb2W1klbONS8S96dngjCvJ4gjXGB2U47/AOc0DudH1cRRpa2wnSNVGI3TJxu44ajl1YWl1p00D6yiSeIJVMRDHhSNv4/hSutusRnLS7vEUKVPYY8wPpVqU1rYmcmp0/sMyeFaL/bru8tfGO0RICA/GD8631FttbO2s7iSYLLneUOeQ/Hestr9Ultm9lt7mK2TOJHUAnPxo9fR3EyRXUNrBMAreGoYMHGcih+JKuQ/+p/BSCbuyWKVb6ScL7MirGrDBUFAefnuNLDwTzey2thulbxXZGTjOcHPHzr1G801NQtLOGcQobiMGfbGrbCqgYG4EdxQodLRWzmSK9mR937MokS7RwOwX8aLDgpLe+xeXMqetCxD0xJceJJLexyTPhfEQlsseAnHOcgVQ0+Ca31MJOkhZCAMrjPI/rTSuhajbaqos9QnSzY+JI67MrIOM9vQkZ+NF30gSv4lxcm4cMrCSSKPfgHOMhRxwAaKcOaW9vZLyYnrR5zb6heGcm1URE8DapyPSmTpWxvbrWY2jD+zNG2drYyQp7jzpgvtCtbuEYh9mkVuPBUDgcc1LpNzadMsp8MySGNgzbMEjGBn60WSb4g43CrYtNJrNlarZakNkDOkkasAc4J5GPLIOfPgZq9rXVU0Gpm4eISxyRgRiN8FRnnPzqjqHVF1rVnb289ikEMUxdZN+RJjIK48u9at4IdVjNxFp8UDk/YkkOwj1AB/OlTivpjHkntIlXQrrkvcsMnsAMVfs9JSFsyXIz55cVxF0lZGImT2h8EfbnY0RsOhdGuIt8lsxznuxNFmy4mt0JxPJ6kllktvBMftkSfOQVHBqVlDAI5bi0fb2LTDt9aLJ+j3p9Y/9gQn4iqmodH6ZBJi30+BfdHdc0rx/JwR+MIZnnLS5WLWpPY3N0Zk1TT4QVA2+JRmx1/S7O3jhbUNPYogG7xBziq79Ox78R29uB/5YqZemVbGYoR8kq68sIoc+wjbdS2E7Fba4s5GAyRG2TisvdetokiaWe2hjL5JkBx2+Y8yPwqGDpfwyWi8NSRjO3FTv0v41qVmaKT0z2H+cD7qH5oYXJgC9vNA1CZri7uNPlSZhvZlO12A4z73OM+tTWq9M4AE2n+GuBGEYDHOcd/gKtHpyG1jAFlZyBWzhskeX8q3deBJpi2Uuk2CRqcgxR4P30PybekFyS9k0CaGVVVmt3AGADICO+e3zrd1aWUls0envY27spUyYUEKxJOMeeSaWJNC0x9zNaIPpmobLp3SrrU4LXwFCSuFJA7dqdxTFLyFvRJc9I3sk+5NctSP/mtuP9a7n6VuDAiQanYiUHLSuRk/yqhrej6Zp+q3NnHEXSCQorEDJA4qIaPY5TNufeGe/wBa5YVpHf1U7YXs+mbtVlF5rkALbNrRTe8AM8ZPbvTNpjxWA8ObVY5k2KuGkUkEeee5zSFaaRp88jRC297gc0dTpvTkaNWhxxkY4qfjR0+TNehxN5b28bvc3kaRAYLE4AFVX6n0srtt7mO5nf3Y0jBwx8hkA4HxoTL4Lq0M+HXHKt58VStfCVNQMcaKI1GzYMEVHDZNeRK6L2oaVqWtmF5dEtGnUMDy7hR8CMcnmhsnQV/u3fqqzTzGYJv/AFK3Ff3MEMbwTyox7lWNGNI1rUngmMl3KdrDGW7UqptdzoGfImugH/oFdKwzYWgOe5hl/wDVrb9C3AfPsll8vAlx93i086zqNz4UTQynPAYnzNDm1G7Yr7x7ZNV4z3STaRayY+DaQuWnRqIZHlsrPxO8TpFIoVuckjxDny9KjfpOTeGa300n4Wrj/wDpTL7XcG3kYs3BqH2i427vfwfPFOVv9CG2lsCnpD3dzW1iN2eRZqf+omjGk2V3plsiLOWi7LCqKqLz6AUwWMTjRjLKrMzHAIIH4UPmW4WyDdstgZ9KTPkOnosLG9bNTsm5V8JOQcnb2qlGsUQVVjjHfjBq7DYXt0VaEe6OC7HAFELbpeWQg3GoW6Z/uqXz+VPWWV7ZHCmukAJCgQqYwVz2JqMRQM4xESQO+/tTpH0ZbyL7+p7v92LH8asRdD2KHPt1wT8Nv8qNZ4/YpqxBlMcMMk6wyk4OdhyfupI12VtSZfCu2t1RdpSWORVPp3H8a96/0JsSCParnn4r/Kq8v6PdNk73Nx9SDRVklnLkj5yW1uFykN7ZsSOwuMfhW107VeRHEH+McoP8a+gZf0XaTJ9uR3HowFUpP0RaIWyIAfk7D8jS/k/wMmd+2TtbosRyKtWm2NAoxiobhxsAqNZMAVjOKqSzyU0GPHXbjIodqFyokPOcCqklwV86G3t0zvnPemYPFrYryfJnhosSzqDnjmoTcg9m/GqE8vA5rgOMZzWh8JkvJ2EHuW2n3ifrU0MxFkxB5NCGk4PNWUf+xtzRRhJ+UgmvGwRmh883kW5riU7iRmo23BRgKfiasxhRRvyW2dSOBAxqvo8uzV4X/unNSyhpI9rYx8KywgCXKsPKmzGtgLK+cg7XGMmqXDkZLPn55q5eoYmhXHIiB/CubyIPqXzbmr+toDeRgf8Ahhaiv5JDcb/t5K/yBdOVorkv3zxRnU5HjuISpP8Aq8VSXEcypjmr+pJunhA/u0xoTORrG0ihNudjzyeamsUC2l5/iXmoromNwPhWWcpNtcD/AA1yn8Tvl1k0ziPBiUHyonpzL7NMAMZIoGsuFFEtNl/YS/7wqLjU9B+PmTtIYi26zXe2T435Cq5lVWHI+zVWS5HhquezE0Oubonbg+dUMfj0/Zt5vKgMteRpaTbRuI5repzXVvoNneonhiVyM96DrNtt5Fz9unDrTZB0bo8aBRu8gOTxnNMeHVrZXeVVibX0ghNDMejbe5DPu25bjBpJ1HUJLWwEYYuzHcGzn7qcuob72XoKxVHG6VVUgnntXl8s0rY2MO+Srcg/ypEYUq2OnzuP4v8AQf0nra3jdbDUJPBdQNkhPusPj8aaoNRMiboJA6+RXFeS6jYwX/u4EU4H2G7/AEPnQyK61rRHPss0gjXug5Hw4qz8UtdD58h/R7oupSZ+1zUyavOvBY/SvJ9L/SJlQmpQMCMZdTmmyw13T79A1vcKfUbqF4J/Q5eQOceuTL+8anTqCU0r+MoHZq0Z1xxuof6eSfll/Q4L1DKO+01IOoG80H3Ume0KPWuhd/4moXgf7O5439Fq5l9wVDHIWXORVSa5Bj71BFcjb3oZw6Rn35C5FyZxtzmhkrgPjNSvOCMZqhPJzVjHj0UvJzLW0ZPNk4qNptoqvJJlqjlfsKsLGZl+R2XBOMcmr0chNo1Ad9FbeX+yHNS40Fhz82yk7Yck1xJOvpUE0mXNRZpqlFSsr30TtcVJaTHxxVM1Jb+7MDROeiJyPkmyZ2/9oA/4qt6pJuvUz5AVQb/a8/4qkv33XIf0ApTjdotzm1hpfto4kP8Aalq/qj7ZYWPHFCw264Vj61e1tgTEPhUtekDNfjVL9lO8fe4K+lZaHbDMPVahHNSRcJJ/u0xLSEvI3eyuBxirtoQsLetVBzjFTAlYzjzrmtkRfGtm5Zzjv2qCRiUU1y3PesxkAeQqFGg3mqntliWXG3ntRXXtdl1HS7G1AYR22V3H94/9qBMSe9cEnj4ZxUVG3sJZqScr7L9xqVzcWsVs1xK0cfZGbiqHIfIrFbBqTG4fGlVjX0Ld0mSFIrhdso3L6YqCe1kQZQmdP7rn3gPnUsaFe1XVj3AZoJxNMt4/Nc9Czc6Xa3e4KNkhHKdmH86CXGm3dm5kgZwR2KkqR91ehS2cMsZDqCe4bzH1oXco8HF0vixeUq/aX5+oprxmjg82b6fTBOlda6jYyCO6JnjHHPDf1p00nqnTtRUDxCkh/dbg0n32lQzx7lw6NyGWgFzYTW7gx5IUfu8EUppovqkz2fcjqGR8qe1cZI8zXlui9WX2nARzO0sO7HP2lp70zX7LUIQySjdjkZ7VyafsLbLkkjbMZqBXbyJrKyoj0YORvZm9vU1Wnds9zWqymz7KuVviQEmuGJ9aysppSZzRC2J9lPNZWUF+h/j/AMmD3+0a0BWVlOQh+zflXUX21+dZWURy+jpv9f8A8Vauz75+VarKB+xn/H/sroSJo/nV7WSS6fKt1lIf8yzj/wDkyivYVKv2WrKyrS9FT7Noox2Fak7VlZUfZy9EBrY7VlZUsk4auD2NZWULCRxk1PD3FbrKAK/RbQDA4qyOwrKymMRJ3+7iq1xypBrKygY1sAzsbK+QQcJLjcn7vf0qa/gTk45rKyk/R6HxW3hkW9St48M2MMPMUMhdkkJRipI5wcVlZSqLkn//2Q==', // Replace with actual image URL
//         },
//     ];

//     return (
//         <div className='a'>
//         <Grid container spacing={4} justifyContent="center">
//             {lowCostRooms.map((room) => (
//                 <Grid item xs={12} sm={6} md={4} key={room.id}>
//                     <Card>
//                         <CardMedia
//                             component="img"
//                             height="200"
//                             image={room.imageUrl}
//                             alt={room.name}
//                         />
//                         <CardContent>
//                             <Typography variant="h6">{room.name}</Typography>
//                             <Typography variant="body2">Type: {room.type}</Typography>
//                             <Typography variant="body2">Price: {room.price}</Typography>
//                             <Typography variant="body2" color="textSecondary">
//                                 Discount: {room.discount}
//                             </Typography>
//                             <Typography variant="body2">Location: {room.location}</Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}
//         </Grid>
//         </div>
//     );
// };

// export default LowCostRooms;
// import React from 'react';
// import './lowcost.css';
// import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

// const LowCostRooms = () => {
//     // Mock data for low-cost rooms
//     <div>
//         <Typography variant="h2" component="h1" gutterBottom>
//         Explore Low-Cost Room Options
//                             </Typography>
//     </div>
//     const lowCostRooms = [
//         {
//             id: 1,
//             name: 'Budget Inn',
//             type: 'Standard Room',
//             price: '$50/night',
//             discount: '10% off',
//             location: 'New York City, NY',
//             imageUrl: 'https://www.magictrips.in/uploaded_files/category_images/Economy-Hotels06_01_43.jpg',
//         },
//         {
//             id: 2,
//             name: 'Economy Hotel',
//             type: 'Single Room',
//             price: '$40/night',
//             discount: '15% off',
//             location: 'Los Angeles, CA',
//             imageUrl: 'https://www.magictrips.in/uploaded_files/category_images/Economy-Hotels06_01_43.jpg',
//         },
//         {
//             id: 3,
//             name: 'Hostel Stay',
//             type: 'Shared Dormitory',
//             price: '$30/night',
//             discount: '5% off',
//             location: 'Austin, TX',
//             imageUrl: 'https://www.magictrips.in/uploaded_files/category_images/Economy-Hotels06_01_43.jpg',
//         },
//     ];

//     // Handle booking action
//     const handleBookNow = (room) => {
//         alert(`Booking confirmed for ${room.name}!`); // Replace this with actual booking logic
//     };

//     return (
//         <div className='a'>
//             <Grid container spacing={4} justifyContent="center">
//                 {lowCostRooms.map((room) => (
//                     <Grid item xs={12} sm={6} md={4} key={room.id}>
//                         <Card>
//                             <CardMedia
//                                 component="img"
//                                 height="200"
//                                 image={room.imageUrl}
//                                 alt={room.name}
//                             />
//                             <CardContent>
//                                 <Typography variant="h6">{room.name}</Typography>
//                                 <Typography variant="body2">Type: {room.type}</Typography>
//                                 <Typography variant="body2">Price: {room.price}</Typography>
//                                 <Typography variant="body2" color="textSecondary">
//                                     Discount: {room.discount}
//                                 </Typography>
//                                 <Typography variant="body2">Location: {room.location}</Typography>
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={() => handleBookNow(room)} // Trigger booking function
//                                     style={{ marginTop: '10px' }} // Add some margin for aesthetics
//                                 >
//                                     Book Now
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </div>
//     );
// };

// export default LowCostRooms;
// import React from 'react';
// import './lowcost.css';
// import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

// const LowCostRooms = () => {
//     // Mock data for low-cost rooms
//     const lowCostRooms = [
//         {
//             id: 1,
//             name: 'Budget Inn',
//             type: 'Standard Room',
//             price: '$50/night',
//             discount: '10% off',
//             location: 'New York City, NY',
//             imageUrl: 'https://www.magictrips.in/uploaded_files/category_images/Economy-Hotels06_01_43.jpg',
//         },
//         {
//             id: 2,
//             name: 'Economy Hotel',
//             type: 'Single Room',
//             price: '$40/night',
//             discount: '15% off',
//             location: 'Los Angeles, CA',
//             imageUrl: 'https://www.magictrips.in/uploaded_files/category_images/Economy-Hotels06_01_43.jpg',
//         },
//         {
//             id: 3,
//             name: 'Hostel Stay',
//             type: 'Shared Dormitory',
//             price: '$30/night',
//             discount: '5% off',
//             location: 'Austin, TX',
//             imageUrl: 'https://www.magictrips.in/uploaded_files/category_images/Economy-Hotels06_01_43.jpg',
//         },
//     ];

//     // Handle booking action
//     const handleBookNow = (room) => {
//         alert(`Booking confirmed for ${room.name}!`); // Replace this with actual booking logic
//     };

//     return (
//         <div className='a'>
//             <Grid container spacing={4} justifyContent="center">
//                 {lowCostRooms.map((room) => (
//                     <Grid item xs={12} sm={6} md={4} key={room.id}>
//                         <Card>
//                             <CardMedia
//                                 component="img"
//                                 height="200"
//                                 image={room.imageUrl}
//                                 alt={room.name}
//                             />
//                             <CardContent>
//                                 <Typography variant="h6">{room.name}</Typography>
//                                 <Typography variant="body2">Type: {room.type}</Typography>
//                                 <Typography variant="body2">Price: {room.price}</Typography>
//                                 <Typography variant="body2" color="textSecondary">
//                                     Discount: {room.discount}
//                                 </Typography>
//                                 <Typography variant="body2">Location: {room.location}</Typography>
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={() => handleBookNow(room)} // Trigger booking function
//                                     style={{ marginTop: '10px' }} // Add some margin for aesthetics
//                                 >
//                                     Book Now
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </div>
//     );
// };

// export default LowCostRooms;
import React from 'react';
import './lowcost.css';
import { Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LowCostRooms = () => {
    const navigate = useNavigate();

    // Mock data for low-cost rooms
    const lowCostRooms = [
        {
            id: 1,
            name: 'Budget Inn',
            type: 'Standard Room',
            price: '$50/night',
            discount: '10% off',
            location: 'New York City, NY',
            imageUrl: 'https://www.magictrips.in/uploaded_files/category_images/Economy-Hotels06_01_43.jpg',
        },
        {
            id: 2,
            name: 'Economy Hotel',
            type: 'Single Room',
            price: '$40/night',
            discount: '15% off',
            location: 'Los Angeles, CA',
            imageUrl: 'https://www.magictrips.in/uploaded_files/category_images/Economy-Hotels06_01_43.jpg',
        },
        {
            id: 3,
            name: 'Hostel Stay',
            type: 'Shared Dormitory',
            price: '$30/night',
            discount: '5% off',
            location: 'Austin, TX',
            imageUrl: 'https://www.magictrips.in/uploaded_files/category_images/Economy-Hotels06_01_43.jpg',
        },
    ];

    // Handle booking action and navigate to the booking confirmation page
    const handleBookNow = (room) => {
        navigate('/booking-confirmation', { state: { room } });
    };

    return (
        <div className="a">
            <Grid container spacing={4} className="low-cost-grid">
                {lowCostRooms.map((room) => (
                    <Grid item xs={12} sm={6} md={4} key={room.id}>
                        <Card className="low-cost-card">
                            <CardMedia
                                component="img"
                                height="200"
                                image={room.imageUrl}
                                alt={room.name}
                                className="low-cost-card-media"
                            />
                            <CardContent className="low-cost-card-content">
                                <Typography variant="h6" className="low-cost-card-title">
                                    {room.name}
                                </Typography>
                                <Typography variant="body2" className="low-cost-card-type">
                                    Type: {room.type}
                                </Typography>
                                <Typography variant="body2" className="low-cost-card-price">
                                    Price: {room.price}
                                </Typography>
                                <Typography variant="body2" className="low-cost-card-discount" color="textSecondary">
                                    Discount: {room.discount}
                                </Typography>
                                <Typography variant="body2" className="low-cost-card-location">
                                    Location: {room.location}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleBookNow(room)}
                                    className="low-cost-card-button"
                                >
                                    Book Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default LowCostRooms;
