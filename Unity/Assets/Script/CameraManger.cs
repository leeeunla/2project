using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraManger : MonoBehaviour
{
    public float leftLimit = 0.0f;      // ���� ��ũ�� ����
    public float rightLimit = 0.0f;     // ������ ��ũ�� ���� 
    public float topLimit = 0.0f;       // �� ��ũ�� ���� 
    public float bottomLimit = 0.0f;    // �Ʒ� ��ũ�� ����

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        GameObject player = GameObject.FindGameObjectWithTag("Player"); // �÷��̾� ã��
        if (player != null)
        {
            // ī�޶��� ��ǥ ����
            float x = player.transform.position.x;
            float y = player.transform.position.y;
            float z = transform.position.z;

            // �� ���� �̵� ���� ����
            if (x < leftLimit)
            {
                x = leftLimit;
            }
            else if (x > rightLimit)
            {
                x = rightLimit;
            }

            // �� �Ʒ��� �̵� ���� ����
            if (y < bottomLimit)
            {
                y = bottomLimit;
            }
            else if (y > topLimit)
            {
                y = topLimit;
            }
            Vector3 v = new Vector3(x, y, z);
            transform.position = v;
        }
    }
}
