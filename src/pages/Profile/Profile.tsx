import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AutoSizer, List } from "react-virtualized";

import { getUser } from "../../helpers/getUser";
import { getProfilePhotos } from "../../store/profile/profileRequests";
import { setOneGroup, setTwoGroup } from "../../store/profile/profileSlice";
import { AppDispatch, RootStateType } from "../../store/rootStore";
import { H16 } from "../../ui/Typography";

export const Profile = () => {
  const { isAuth } = getUser();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { data, groupTwo, groupOne } = useSelector(
    (state: RootStateType) => state.profile
  );
  const newData = useMemo(
    () =>
      data.filter((item) => {
        if (groupOne && groupTwo) {
          return item;
        } else if (groupOne) {
          return item.group === 1;
        } else if (groupTwo) {
          return item.group === 2;
        } else if (!groupOne && !groupTwo) {
          return false;
        }
      }),
    [data, groupOne, groupTwo]
  );
  // eslint-disable-next-line no-console
  console.log(newData);
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    dispatch(getProfilePhotos());
  }, [dispatch]);

  return (
    <div className={"p-32"}>
      <div className={"flex gap-20"}>
        <div
          role={"button"}
          onClick={() => dispatch(setOneGroup())}
          className={`${
            groupOne ? "bg-highGreen" : "bg-green"
          } px-[70px] py-16 cursor-pointer`}
        >
          <H16 className={"!text-white"}>Группа 1</H16>
        </div>
        <div
          role={"button"}
          onClick={() => dispatch(setTwoGroup())}
          className={`${
            groupTwo ? "bg-highGreen" : "bg-green"
          } px-[70px] py-16 cursor-pointer`}
        >
          <H16 className={"!text-white"}>Группа 2</H16>
        </div>
      </div>

      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-ignore*/}
      <AutoSizer className={"flex flex-col gap-20"} style={{ height: "80vh" }}>
        {({ width, height }) => {
          return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <List
              rowCount={newData.length}
              rowHeight={60}
              rowRenderer={({ key, index, style }) => {
                return (
                  <div className={"mt-20"} key={key} style={style}>
                    <div
                      className={"flex bg-green px-24 py-16 justify-between "}
                    >
                      <H16 className={"!text-white"}>
                        Элемент {newData[index].elem}
                      </H16>
                      <H16 className={"!text-white"}>
                        Группа {newData[index].group}
                      </H16>
                    </div>
                  </div>
                );
              }}
              height={height}
              width={width}
            />
          );
        }}
      </AutoSizer>
    </div>
  );
};
