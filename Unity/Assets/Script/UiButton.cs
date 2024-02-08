/*using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;


public class UiButton : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{

    [SerializeField] private bool isRight;
    private PlayerController pCtrl;


    private void OnEnable()
    {
        if (pCtrl == null)
        {
            pCtrl = FindObjectOfType<PlayerController>();
        }
    }

    public void OnPointerDown(PointerEventData eventData)
    {

        pCtrl.SetAxis(isRight ? 1 : -1);
    }
    //아까 제 코 드 있 나 요 
    public void OnPointerUp(PointerEventData eventData)
    {
        pCtrl.SetAxis(0);
    }
}

*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;


public class UiButton : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IPointerEnterHandler
{

    [SerializeField] private bool isRight;
    private PlayerController pCtrl;
    public static List<int> inputList = new List<int>();

    private void OnEnable()
    {
        if (pCtrl == null)
        {
            pCtrl = FindObjectOfType<PlayerController>();
        }
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        inputList.Add(isRight ? 1 : -1);
        pCtrl.SetAxis(inputList[inputList.Count - 1]);
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        inputList.Remove(isRight ? 1 : -1);
        pCtrl.SetAxis(inputList.Count != 0 ? inputList[inputList.Count - 1] : 0);
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        /*
        var nowDir = isRight ? 1 : -1;
        if (!inputList.Contains(nowDir))
        {
            inputList.Add(isRight ? 1 : -1);
            pCtrl.SetAxis(inputList[inputList.Count - 1]);
        }
        */
    }
}